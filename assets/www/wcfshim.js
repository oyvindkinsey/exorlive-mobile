// Extend Functions prototype
Function.prototype.initializeBase = function(instance, baseArguments) {
};
Function.prototype.registerClass = function(typeName, baseType, interfaceTypes) {
    if (baseType) {
        $.extend(this.prototype, baseType.prototype);
    }
};
Function.prototype.registerEnum= function(name, flags) {
};
var Type = {
    registerNamespace: function(ns) {
        var root = window, atoms = ns.split(".");

        for (var i = 0; i<atoms.length; i++) {
            root = root[atoms[i]] = root[atoms[i]] || {};
        }
    }
};

// Create the Sys.Net.WebServiceProxy object
Type.registerNamespace("Sys.Net");
Sys.Net.WebServiceProxy = function() {
};
Sys.Net.WebServiceProxy._generateTypedConstructor = function(type) {
    return function(properties) {
        if (properties) {
            for (var name in properties) {
                this[name] = properties[name];
            }
        }
        this.__type = type;
    };
};
Sys.Net.WebServiceProxy.prototype = {
    _invoke: function(path, action, useGet, params, onSuccess, onFailure, userContext) {

        $.ajax({
            url: path + "/" + action,
            type: useGet ? "get" : "post",
            contentType:"application/json",
            data: JSON.stringify(params),
            processData: false,
            success: function(data) {
                onSuccess(data.d);
            },
            error: function(data) {
                (onFailure || Sys.Net.WebServiceProxy.onFailure)(data, JSON.parse(data.responseText).d);
            },
            scope: userContext
        });
    },
    set_path: function(path) {
        this._path = path;
    },
    get_path: function() {
        return this._path;
    }
};