/**
 * Created by Adam_Kruppa on 8/7/2015.
 */

cm.config(function($stateProvider, $urlRouterProvider) {
    //
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/login");
    //
    // Now set up the states
    $stateProvider
        .state('login', {
            url: "/login",
            templateUrl: "app/cm/views/partials/login.html",
            controller: "LoginController"
        })
        .state('register', {
            url: "/register",
            templateUrl: "app/cm/views/partials/register.html",
            controller: "RegisterController"
        })
        .state('main', {
            url: "/main",
            templateUrl: "app/cm/views/partials/main.html",
            controller: "MainController"
        })
        .state('main.userlist', {
            url: "/list",
            templateUrl: "app/cm/views/partials/main.userlist.html",
            controller: "UserController"
        });
});