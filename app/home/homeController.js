/**
 * Created by Adam_Kruppa on 8/8/2015.
 */

angular.module("cm.home")
    .config(function($stateProvider, $urlRouterProvider) {
        //$stateProvider
        //    .state('home', {
        //        url: "/home",
        //        templateUrl: "app/home/home.html",
        //        controller: "HomeController"
        //    })
    })

    .controller('HomeController', ['$scope', 'MyService', function ($scope, MyService) {
        MyService.myServiceFunction("main page");
    $scope.title = "Main page";
}]);
