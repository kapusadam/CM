/**
 * Created by Adam_Kruppa on 8/8/2015.
 */

cm = angular.module("cm", ["ui.router", "ui.bootstrap", "cm.common", "cm.home"]);
cm.run(function($rootScope) {
    // adds some basic utilities to the $rootScope for debugging purposes

    $rootScope.log = function(thing) {
        $log(thing);
    };

    $rootScope.alert = function(thing) {
        alert(thing);
    };
});

cm.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/");

    $stateProvider
        .state('cm.home', {
            url: "/home",
            templateUrl: "app/home/home.html",
            controller: function(){
                alert("dsa")
            }

        })

    .state('cm', {
        url: "/"
        //controller: function($state) {
        //    console.log("X")
        //    //$state.go(".home")
        //}
    })

});


