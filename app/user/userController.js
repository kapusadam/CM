/**
 * Created by Adam on 8/8/2015.
 */

angular.module("cm.user")
    .controller('UserController', ['$scope', 'MyService', function ($scope, MyService) {
        MyService.myServiceFunction("User module");
        $scope.title = "User list";
    }]);
