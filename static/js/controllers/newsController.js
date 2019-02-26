app.controller("newsController", ["$scope", "ApiService", function ($scope, ApiService) {
    $scope.init = function () {
        getAllNews();
    };

    function getAllNews() {
        ApiService.getAllNews().then(function (result) {
            $scope.news = result.data; //array of all news (without archived date)
        }, function (error) {
            console.log(error);
        });
    }
}]);

