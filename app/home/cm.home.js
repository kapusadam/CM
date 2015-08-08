/**
 * Created by Adam_Kruppa on 8/8/2015.
 */
angular.module("cm.home", ["ui.router", "ui.bootstrap", "cm.common"]);
angular.module("cm.home").config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('home.list', {
            url: "/list",
            template: "<div>List</div>",
            controller: "UserController"

        });
})