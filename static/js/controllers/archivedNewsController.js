app.controller("archivedController", ["$scope", "ApiService", function ($scope, ApiService) {

    $scope.init = function () {
        getAllArchivedNews();
    };

    function getAllArchivedNews() {
        //calling the service that will get all the archived news
        ApiService.getAllArchivedNews().then(function (result) {
            $scope.archived_news = result.data; //array of all archived news
        }, function (error) {
            console.log(error);
        });
    }

}]);
