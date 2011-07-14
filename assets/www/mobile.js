/*global $, Sys, exorlive, console, alert*/

var app = ( function() {

    var pageAuth, pageMain, pageWorkout, txtQuery, btnList, txtUsername ,txtPassword ,btnAuth;
    var divList, divWorkout;
    var events = {
        _handlers: {},
        on: function(name, handler) {
            var handlers = this._handlers[name] || (this._handlers[name] = []);
            handlers.push(handler);
        },
        fireEvent: function(name, args) {
            var handlers = this._handlers[name];
            if (handlers) {
                for (var i = 0; i<handlers.length; i++) {
                    handlers[i].apply(null, Array.prototype.slice.call(arguments, 1));
                }
            }
        },
        hasListener: function(name) {
            return name in this._handlers;
        }
    };

    var appRoot;

    var timer;
    /**
     * Pings the server to see if we are still authenticated.
     * This will also keep the session alive.
     */
    function ping() {
        exorlive.com._2011._05.Core.Ping( function(response) {
            if (response && response.Errors.length === 0) {
                // we are authenticated
                events.fireEvent("signedin");
            }
            else {
                // we need to authenticate
                events.fireEvent("signedout");
            }
        });
    }

    /**
     * Authenticates the user using the provided username and password
     */
    function authenticate() {
        try {
            $.mobile.pageLoading();
            var username = txtUsername.val();
            var password = txtPassword.val();
            exorlive.com._2011._05.Core.Authenticate(username, password, function(response) {
                try {
                    if (response && response.Errors.length === 0) {
                        events.fireEvent("signedin");
                    }
                    else {
                        alert("Auth error");
                    }
                } catch(e1) {
                    alert(e1.message);
                }
                $.mobile.pageLoading(true);
            });
        } catch (e0) {
            alert(e0.message);
        }
    }

    /**
     * Queries the server for matching workouts.
     */
    function queryWorkouts() {
        try {
            $.mobile.pageLoading();
            exorlive.com._2011._05.Workouts.QueryWorkouts(0, 0, txtQuery.val(), true, 0, 10, function(response) {
                try {
                    if (response.Errors.length === 0) {
                        divList.html("");
                        $("#tplWorkoutList").tmpl(response.Data).appendTo(divList);
                        $.mobile.pageLoading(true);
                    }
                } catch(e1) {
                    alert(e1.message);
                }
            });
        } catch(e0) {
            alert(e0.message);
        }
    }

    var set;
    function getWorkout(node, id) {
        $.mobile.pageLoading();
        exorlive.com._2011._05.Workouts.GetWorkout(id, function(response) {
            try {
                if (response.Errors.length === 0) {
                    divWorkout.html("");
                    $("#tplWorkout").tmpl(response.Data).appendTo(divWorkout);
                    $.mobile.pageLoading(true);
                    $.mobile.changePage(pageWorkout, null,null,true);
                    if (!set) {
                        pageWorkout.find("a.ui-btn-up-a").bind("click", function() {
                            $.mobile.changePage(pageMain,"slide", true, false);
                            return false;
                        });
                        set = true;
                    }
                }
            } catch(e1) {
                alert(e1.message);
            }
        });
    }

    function app_signedIn() {
        $.mobile.changePage(pageMain);
        timer = setInterval(ping, 1000*60*4);
    }

    function app_signedOut() {
        if (timer) {
            clearInterval(timer);
            timer = null;
        }
        if($.mobile.activePage[0] != pageAuth[0]) {
            $.mobile.changePage(pageAuth);
        }
    }

    /**
     * This handles the clicking of any node, and executes the associated handler with the arguments embedded in the url.
     * For A elements, it expects href in the form of /[event-name]/arg1/arg2/...
     */
    function body_onClick(e) {
        var target = e.target;
        if (target.nodeName == "A") {
            var href = target.href.substring(appRoot.length), atoms = href.split("/"), eventName = atoms[0];
            if (events.hasListener(eventName)) {
                atoms[0] = target;
                events.fireEvent.apply(events,[eventName].concat(atoms));
                e.preventDefault();
                return false;
            }
        }

    }

    /**
     * This is the 'public' interface provided by the application
     */
    var app = {
        init: function() {
            appRoot = location.protocol + "//" + location.host + location.pathname;
            appRoot = appRoot.substring(0,appRoot.lastIndexOf("/")+1);

            pageAuth = $("#pageAuth");
            pageMain = $("#pageMain");
            pageWorkout = $("#pageWorkout");
            txtQuery = $("#txtQuery");
            btnList = $("#btnList");

            divList = $("#divList");
            divWorkout = $("#divWorkout");

            txtUsername = $("#txtUsername");
            txtPassword = $("#txtPassword");
            btnAuth = $("#btnAuth");

            // set up event handlers
            events.on("signedin", app_signedIn);
            events.on("signedout", app_signedOut);
            events.on("workout-open", getWorkout);

            $(document.body).bind("click", body_onClick);

            // set up error handling
            Sys.Net.WebServiceProxy.onFailure = function(data, json) {
                if (data.status == 401) {
                    events.fireEvent("signedout");
                    alert("auth error");
                }
                else {
                    if (~data.responseText.indexOf("Access is denied")) {
                        events.fireEvent("signedout");
                        alert("auth error");
                    }
                }
            };
            btnList.bind("click", queryWorkouts);
            btnAuth.bind("click", authenticate);

            // check if we are authenticated to start things
            ping();
        },
        deviceReady: function() {
            document.addEventListener("pause", function() {
                clearInterval(timer);
                timer = null;
            }, false);
            document.addEventListener("resume", function() {
                timer = setInterval(ping, 1000*60*4);
                ping();
            }, false);
        }
    };
    return app;
}());
document.addEventListener("deviceready", function() {
    app.deviceReady();
}, false);