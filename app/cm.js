/**
 * Created by Adam_Kruppa on 8/8/2015.
 */

cm = angular.module("cm", ["ui.router", "ui.bootstrap", "cm.common", "cm.home", "cm.user"]);
cm.run(function($rootScope) {

    $rootScope.log = function(thing) {
        $log(thing);
    };

    $rootScope.alert = function(thing) {
        alert(thing);
    };
});

cm.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/home");
    $stateProvider
        .state('home', {
            url: "/home",
            templateUrl: "app/home/home.html",
            controller: "HomeController"
        });
});


