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
            controller : "ServicesController"
        })
        .when("/contact", {
            templateUrl : "templates/contact.html",
            controller : "ContactsController"
        })
        .otherwise({
            redirectTo : '/'
        });
});