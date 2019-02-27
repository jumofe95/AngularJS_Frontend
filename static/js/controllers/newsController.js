app.controller("newsController", ["$scope", "ApiService", function ($scope, ApiService) {
    $scope.init = function () {
        getAllNews();
    };

    function getAllNews() {
        //calling the service that will get all the news
        ApiService.getAllNews().then(function (result) {
            $scope.news = result.data; //array of all news (without archived date)
        }, function (error) {
            console.log(error);
        });
    }
}]);

