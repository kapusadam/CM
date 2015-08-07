/**
 * Created by Adam_Kruppa on 8/6/2015.
 */
var services = angular.module('services',[]);
services.service('MyService', function(){
    this.myServiceFunction = function() {
        console.log("SERVICE HIVAS!!")
    };
});
angular.module("cm", [ "ui.router", "ui.bootstrap", "services"]).run(function($rootScope) {
    // adds some basic utilities to the $rootScope for debugging purposes

    $rootScope.log = function(thing) {
        console.log(thing);
    };

    $rootScope.alert = function(thing) {
        alert(thing);
    };
});

