app.controller("archivedController", ["$scope", "ApiService", function ($scope, ApiService) {

    $scope.init = function () {
        getAllArchivedNews();
    };

/*
    $scope.deleteNew = function(new_id, $index) {
        ApiService.deleteNew(new_id).then(function (result) {
            $scope.archived_news.splice($index, 1); //remove the selected new from array for making more dynamic UX
        }, function (error) {
            console.log(error);
        });
    };
*/

    function getAllArchivedNews() {
        ApiService.getAllArchivedNews().then(function (result) {
            $scope.archived_news = result.data; //array of all archived news
        }, function (error) {
            console.log(error);
        });
    }

}]);
