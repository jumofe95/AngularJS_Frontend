app.controller("newsController", ["$scope", "ApiService", function ($scope, ApiService) {
    $scope.init = function () {
        getAllNews()
    };

    $scope.archiveNew = function (new_id) {
        console.log(new_id);
    };

    $scope.archiveNew = function(new_id, $index) {
        ApiService.archiveNew(new_id).then(function (result) {
            $scope.news.splice($index, 1); //remove the selected new from array for making more dynamic UX
        }, function (error) {
            console.log(error);
        });
    };

    function getAllNews() {
        ApiService.getAllNews().then(function (result) {
            $scope.news = result.data; //array of all news (without archived date)
        }, function (error) {
            console.log(error);
        });
    }
}]);

