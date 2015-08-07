/**
 * Created by Adam_Kruppa on 8/7/2015.
 */

CM.config(function($stateProvider, $urlRouterProvider) {
    //
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/login");
    //
    // Now set up the states
    $stateProvider
        .state('login', {
            url: "/login",
            templateUrl: "app/views/partials/login.html",
            controller: "LoginController"
        })
        .state('register', {
            url: "/register",
            templateUrl: "app/views/partials/register.html",
            controller: "RegisterController"
        })
        .state('main', {
            url: "/main",
            templateUrl: "app/views/partials/main.html",
            controller: "MainController"
        })
        .state('main.userlist', {
            url: "/list",
            templateUrl: "app/views/partials/main.userlist.html",
            controller: "UserController"
        });
});