/**
 * Created by Adam_Kruppa on 8/8/2015.
 */

angular.module("cm.home")
    //.config(function($stateProvider, $urlRouterProvider) {
    //    $stateProvider
    //        .state('cm.home', {
    //            url: "/home",
    //            templateUrl: "app/home/home.html",
    //            controller: "HomeController"
    //        })
    //})

    .controller('HomeController', ['$scope', function ($scope) {
    alert(1);
    $scope.title = "Main page";
}]);
