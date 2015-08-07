/**
 * Created by Adam_Kruppa on 8/7/2015.
 */
angular.module("cm").controller('UserController', ['$scope', function ($scope) {
    $scope.users = [{username: "Kis Pista", points:20}, {username: "Nagy G?za", points:17}, {username: "Balogh J?zsi", points:10}];
}]);
