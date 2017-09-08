var myApp = angular.module("myApp", ["ngRoute"]);
myApp.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl : "templates/main.html",
            controller : "MainController"
        })
        .when("/about", {
            templateUrl : "templates/about.html",
            controller : "MainController"
        })
        .when("/service", {
            templateUrl : "templates/service.html",
            controller : "MainController"
        })
        .when("/contact", {
            templateUrl : "templates/contact.html",
            controller : "MainController"
        })
        .otherwise({
            redirectTo : '/'
        });
});