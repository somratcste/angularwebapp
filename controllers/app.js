var myApp = angular.module("myApp", ["ngRoute"]);
myApp.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl : "templates/main.html",
            controller : "MainController"
        });
});