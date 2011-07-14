Type.registerNamespace('exorlive.com._2011._05');
exorlive.com._2011._05.Core=function() {
exorlive.com._2011._05.Core.initializeBase(this);
this._timeout = 0;
this._userContext = null;
this._succeeded = null;
this._failed = null;
}
exorlive.com._2011._05.Core.prototype={
_get_path:function() {
 var p = this.get_path();
 if (p) return p;
 else return exorlive.com._2011._05.Core._staticInstance.get_path();},
Authenticate:function(username,password,succeededCallback, failedCallback, userContext) {
return this._invoke(this._get_path(), 'Authenticate',false,{username:username,password:password},succeededCallback,failedCallback,userContext); },
Ping:function(succeededCallback, failedCallback, userContext) {
return this._invoke(this._get_path(), 'Ping',false,{},succeededCallback,failedCallback,userContext); }}
exorlive.com._2011._05.Core.registerClass('exorlive.com._2011._05.Core',Sys.Net.WebServiceProxy);
exorlive.com._2011._05.Core._staticInstance = new exorlive.com._2011._05.Core();
exorlive.com._2011._05.Core.set_path = function(value) { exorlive.com._2011._05.Core._staticInstance.set_path(value); }
exorlive.com._2011._05.Core.get_path = function() { return exorlive.com._2011._05.Core._staticInstance.get_path(); }
exorlive.com._2011._05.Core.set_timeout = function(value) { exorlive.com._2011._05.Core._staticInstance.set_timeout(value); }
exorlive.com._2011._05.Core.get_timeout = function() { return exorlive.com._2011._05.Core._staticInstance.get_timeout(); }
exorlive.com._2011._05.Core.set_defaultUserContext = function(value) { exorlive.com._2011._05.Core._staticInstance.set_defaultUserContext(value); }
exorlive.com._2011._05.Core.get_defaultUserContext = function() { return exorlive.com._2011._05.Core._staticInstance.get_defaultUserContext(); }
exorlive.com._2011._05.Core.set_defaultSucceededCallback = function(value) { exorlive.com._2011._05.Core._staticInstance.set_defaultSucceededCallback(value); }
exorlive.com._2011._05.Core.get_defaultSucceededCallback = function() { return exorlive.com._2011._05.Core._staticInstance.get_defaultSucceededCallback(); }
exorlive.com._2011._05.Core.set_defaultFailedCallback = function(value) { exorlive.com._2011._05.Core._staticInstance.set_defaultFailedCallback(value); }
exorlive.com._2011._05.Core.get_defaultFailedCallback = function() { return exorlive.com._2011._05.Core._staticInstance.get_defaultFailedCallback(); }
exorlive.com._2011._05.Core.set_enableJsonp = function(value) { exorlive.com._2011._05.Core._staticInstance.set_enableJsonp(value); }
exorlive.com._2011._05.Core.get_enableJsonp = function() { return exorlive.com._2011._05.Core._staticInstance.get_enableJsonp(); }
exorlive.com._2011._05.Core.set_jsonpCallbackParameter = function(value) { exorlive.com._2011._05.Core._staticInstance.set_jsonpCallbackParameter(value); }
exorlive.com._2011._05.Core.get_jsonpCallbackParameter = function() { return exorlive.com._2011._05.Core._staticInstance.get_jsonpCallbackParameter(); }
exorlive.com._2011._05.Core.set_path("http://test.exorlive.com/webservices/V1/Core.svc");
exorlive.com._2011._05.Core.Authenticate= function(username,password,onSuccess,onFailed,userContext) {exorlive.com._2011._05.Core._staticInstance.Authenticate(username,password,onSuccess,onFailed,userContext); }
exorlive.com._2011._05.Core.Ping= function(onSuccess,onFailed,userContext) {exorlive.com._2011._05.Core._staticInstance.Ping(onSuccess,onFailed,userContext); }
var gtc = Sys.Net.WebServiceProxy._generateTypedConstructor;
if (typeof(exorlive.com._2011._05.Response) === 'undefined') {
exorlive.com._2011._05.Response=gtc("Response:http://exorlive.com/2011/05");
exorlive.com._2011._05.Response.registerClass('exorlive.com._2011._05.Response');
}
if (typeof(exorlive.com._2011._05.ServiceError) === 'undefined') {
exorlive.com._2011._05.ServiceError=gtc("ServiceError:http://exorlive.com/2011/05");
exorlive.com._2011._05.ServiceError.registerClass('exorlive.com._2011._05.ServiceError');
}
Type.registerNamespace('ExorLive.Client.Services.V1');
if (typeof(ExorLive.Client.Services.V1.ServiceError) === "undefined") {
   ExorLive.Client.Services.V1.ServiceError = {};
}
if (typeof(ExorLive.Client.Services.V1.ServiceError.ErrorCodes) === 'undefined') {
ExorLive.Client.Services.V1.ServiceError.ErrorCodes = function() { throw Error.invalidOperation(); }
ExorLive.Client.Services.V1.ServiceError.ErrorCodes.prototype = {NotAuthenticated: 1,NotAuthorized: 2,GeneralException: 3,ArgumentOutOfRangeException: 4,ArgumentNullException: 5,InvalidReturnValue: 6}
ExorLive.Client.Services.V1.ServiceError.ErrorCodes.registerEnum('ExorLive.Client.Services.V1.ServiceError.ErrorCodes', true);
}
