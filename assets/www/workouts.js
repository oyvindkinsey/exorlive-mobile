Type.registerNamespace('exorlive.com._2011._05');
exorlive.com._2011._05.Workouts=function() {
exorlive.com._2011._05.Workouts.initializeBase(this);
this._timeout = 0;
this._userContext = null;
this._succeeded = null;
this._failed = null;
}
exorlive.com._2011._05.Workouts.prototype={
_get_path:function() {
 var p = this.get_path();
 if (p) return p;
 else return exorlive.com._2011._05.Workouts._staticInstance.get_path();},
GetListOfAvailableTags:function(succeededCallback, failedCallback, userContext) {
return this._invoke(this._get_path(), 'GetListOfAvailableTags',false,{},succeededCallback,failedCallback,userContext); },
QueryWorkouts:function(primaryLocation,secondaryLocation,query,includeChildren,start,length,succeededCallback, failedCallback, userContext) {
return this._invoke(this._get_path(), 'QueryWorkouts',false,{primaryLocation:primaryLocation,secondaryLocation:secondaryLocation,query:query,includeChildren:includeChildren,start:start,length:length},succeededCallback,failedCallback,userContext); },
GetWorkout:function(id,succeededCallback, failedCallback, userContext) {
return this._invoke(this._get_path(), 'GetWorkout',false,{id:id},succeededCallback,failedCallback,userContext); },
SetWorkout:function(entity,succeededCallback, failedCallback, userContext) {
return this._invoke(this._get_path(), 'SetWorkout',false,{entity:entity},succeededCallback,failedCallback,userContext); },
GetExercise:function(id,succeededCallback, failedCallback, userContext) {
return this._invoke(this._get_path(), 'GetExercise',false,{id:id},succeededCallback,failedCallback,userContext); }}
exorlive.com._2011._05.Workouts.registerClass('exorlive.com._2011._05.Workouts',Sys.Net.WebServiceProxy);
exorlive.com._2011._05.Workouts._staticInstance = new exorlive.com._2011._05.Workouts();
exorlive.com._2011._05.Workouts.set_path = function(value) { exorlive.com._2011._05.Workouts._staticInstance.set_path(value); }
exorlive.com._2011._05.Workouts.get_path = function() { return exorlive.com._2011._05.Workouts._staticInstance.get_path(); }
exorlive.com._2011._05.Workouts.set_timeout = function(value) { exorlive.com._2011._05.Workouts._staticInstance.set_timeout(value); }
exorlive.com._2011._05.Workouts.get_timeout = function() { return exorlive.com._2011._05.Workouts._staticInstance.get_timeout(); }
exorlive.com._2011._05.Workouts.set_defaultUserContext = function(value) { exorlive.com._2011._05.Workouts._staticInstance.set_defaultUserContext(value); }
exorlive.com._2011._05.Workouts.get_defaultUserContext = function() { return exorlive.com._2011._05.Workouts._staticInstance.get_defaultUserContext(); }
exorlive.com._2011._05.Workouts.set_defaultSucceededCallback = function(value) { exorlive.com._2011._05.Workouts._staticInstance.set_defaultSucceededCallback(value); }
exorlive.com._2011._05.Workouts.get_defaultSucceededCallback = function() { return exorlive.com._2011._05.Workouts._staticInstance.get_defaultSucceededCallback(); }
exorlive.com._2011._05.Workouts.set_defaultFailedCallback = function(value) { exorlive.com._2011._05.Workouts._staticInstance.set_defaultFailedCallback(value); }
exorlive.com._2011._05.Workouts.get_defaultFailedCallback = function() { return exorlive.com._2011._05.Workouts._staticInstance.get_defaultFailedCallback(); }
exorlive.com._2011._05.Workouts.set_enableJsonp = function(value) { exorlive.com._2011._05.Workouts._staticInstance.set_enableJsonp(value); }
exorlive.com._2011._05.Workouts.get_enableJsonp = function() { return exorlive.com._2011._05.Workouts._staticInstance.get_enableJsonp(); }
exorlive.com._2011._05.Workouts.set_jsonpCallbackParameter = function(value) { exorlive.com._2011._05.Workouts._staticInstance.set_jsonpCallbackParameter(value); }
exorlive.com._2011._05.Workouts.get_jsonpCallbackParameter = function() { return exorlive.com._2011._05.Workouts._staticInstance.get_jsonpCallbackParameter(); }
exorlive.com._2011._05.Workouts.set_path("http://test.exorlive.com/webservices/V1/Workouts.svc");
exorlive.com._2011._05.Workouts.GetListOfAvailableTags= function(onSuccess,onFailed,userContext) {exorlive.com._2011._05.Workouts._staticInstance.GetListOfAvailableTags(onSuccess,onFailed,userContext); }
exorlive.com._2011._05.Workouts.QueryWorkouts= function(primaryLocation,secondaryLocation,query,includeChildren,start,length,onSuccess,onFailed,userContext) {exorlive.com._2011._05.Workouts._staticInstance.QueryWorkouts(primaryLocation,secondaryLocation,query,includeChildren,start,length,onSuccess,onFailed,userContext); }
exorlive.com._2011._05.Workouts.GetWorkout= function(id,onSuccess,onFailed,userContext) {exorlive.com._2011._05.Workouts._staticInstance.GetWorkout(id,onSuccess,onFailed,userContext); }
exorlive.com._2011._05.Workouts.SetWorkout= function(entity,onSuccess,onFailed,userContext) {exorlive.com._2011._05.Workouts._staticInstance.SetWorkout(entity,onSuccess,onFailed,userContext); }
exorlive.com._2011._05.Workouts.GetExercise= function(id,onSuccess,onFailed,userContext) {exorlive.com._2011._05.Workouts._staticInstance.GetExercise(id,onSuccess,onFailed,userContext); }
var gtc = Sys.Net.WebServiceProxy._generateTypedConstructor;
if (typeof(exorlive.com._2011._05.ArrayOfTagResponse) === 'undefined') {
exorlive.com._2011._05.ArrayOfTagResponse=gtc("ArrayOfTagResponse:http://exorlive.com/2011/05");
exorlive.com._2011._05.ArrayOfTagResponse.registerClass('exorlive.com._2011._05.ArrayOfTagResponse');
}
if (typeof(exorlive.com._2011._05.Response) === 'undefined') {
exorlive.com._2011._05.Response=gtc("Response:http://exorlive.com/2011/05");
exorlive.com._2011._05.Response.registerClass('exorlive.com._2011._05.Response');
}
if (typeof(exorlive.com._2011._05.ServiceError) === 'undefined') {
exorlive.com._2011._05.ServiceError=gtc("ServiceError:http://exorlive.com/2011/05");
exorlive.com._2011._05.ServiceError.registerClass('exorlive.com._2011._05.ServiceError');
}
Type.registerNamespace('exorlive.com._2011._05.entities');
if (typeof(exorlive.com._2011._05.entities.Tag) === 'undefined') {
exorlive.com._2011._05.entities.Tag=gtc("Tag:http://exorlive.com/2011/05/entities");
exorlive.com._2011._05.entities.Tag.registerClass('exorlive.com._2011._05.entities.Tag');
}
if (typeof(exorlive.com._2011._05.ArrayOfWorkoutMetaResponse) === 'undefined') {
exorlive.com._2011._05.ArrayOfWorkoutMetaResponse=gtc("ArrayOfWorkoutMetaResponse:http://exorlive.com/2011/05");
exorlive.com._2011._05.ArrayOfWorkoutMetaResponse.registerClass('exorlive.com._2011._05.ArrayOfWorkoutMetaResponse');
}
if (typeof(exorlive.com._2011._05.entities.WorkoutMeta) === 'undefined') {
exorlive.com._2011._05.entities.WorkoutMeta=gtc("WorkoutMeta:http://exorlive.com/2011/05/entities");
exorlive.com._2011._05.entities.WorkoutMeta.registerClass('exorlive.com._2011._05.entities.WorkoutMeta');
}
if (typeof(exorlive.com._2011._05.WorkoutResponse) === 'undefined') {
exorlive.com._2011._05.WorkoutResponse=gtc("WorkoutResponse:http://exorlive.com/2011/05");
exorlive.com._2011._05.WorkoutResponse.registerClass('exorlive.com._2011._05.WorkoutResponse');
}
if (typeof(exorlive.com._2011._05.entities.Workout) === 'undefined') {
exorlive.com._2011._05.entities.Workout=gtc("Workout:http://exorlive.com/2011/05/entities");
exorlive.com._2011._05.entities.Workout.registerClass('exorlive.com._2011._05.entities.Workout');
}
if (typeof(exorlive.com._2011._05.entities.Exercise) === 'undefined') {
exorlive.com._2011._05.entities.Exercise=gtc("Exercise:http://exorlive.com/2011/05/entities");
exorlive.com._2011._05.entities.Exercise.registerClass('exorlive.com._2011._05.entities.Exercise');
}
if (typeof(exorlive.com._2011._05.entities.ExerciseCategory) === 'undefined') {
exorlive.com._2011._05.entities.ExerciseCategory=gtc("ExerciseCategory:http://exorlive.com/2011/05/entities");
exorlive.com._2011._05.entities.ExerciseCategory.registerClass('exorlive.com._2011._05.entities.ExerciseCategory');
}
if (typeof(exorlive.com._2011._05.ExerciseResponse) === 'undefined') {
exorlive.com._2011._05.ExerciseResponse=gtc("ExerciseResponse:http://exorlive.com/2011/05");
exorlive.com._2011._05.ExerciseResponse.registerClass('exorlive.com._2011._05.ExerciseResponse');
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
Type.registerNamespace('exorlive.com._2011._05.enums');
if (typeof(exorlive.com._2011._05.enums.WorkoutType) === 'undefined') {
exorlive.com._2011._05.enums.WorkoutType = function() { throw Error.invalidOperation(); }
exorlive.com._2011._05.enums.WorkoutType.prototype = {All: 0,Personal: 1,PersonalTemplate: 3,SystemTemplate: 4,Prioritized: 5}
exorlive.com._2011._05.enums.WorkoutType.registerEnum('exorlive.com._2011._05.enums.WorkoutType', true);
}
