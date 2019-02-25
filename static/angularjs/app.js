var app = angular.module("myshop", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl : "../../templates/index.htm"
        })
        .when("/archived", {
            templateUrl : "archived.htm"
        })
});