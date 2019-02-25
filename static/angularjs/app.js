var app = angular.module("myshop", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl : "index.htm"
        })
        .when("/archived", {
            templateUrl : "archived.htm"
        })
});