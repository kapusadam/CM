/**
 * Created by Adam_Kruppa on 8/7/2015.
 */
angular.module("cm").controller('Hello', ['$scope', '$timeout', 'MyService', function ($scope, $timeout, MyService) {
    MyService.myServiceFunction();
}]);
