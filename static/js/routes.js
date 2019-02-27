app.config(["$routeProvider", function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl : "news.html",
            controller: 'newsController'
        })
        .when("/archived", {
            templateUrl : "archived.html",
            controller: 'archivedController'
        });
}]);