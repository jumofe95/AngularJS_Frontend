app.controller("newActionsController", ['$scope',"ApiService", function ($scope, ApiService) {
    //function that will execute on "Archive" button click
    $scope.archiveNew = function(new_id, $index) {
        ApiService.archiveNew(new_id).then(function (result) {
            $scope.news.splice($index, 1); //remove the selected new from array for making more dynamic UX
        }, function (error) {
            console.log(error);
        });
    };

    //function that will execute on "Remove" button click
    $scope.deleteNew = function(new_id, $index) {
        ApiService.deleteNew(new_id).then(function (result) {
            $scope.news.splice($index, 1); //remove the selected new from array for making more dynamic UX
        }, function (error) {
            console.log(error);
        });
    };
}]);


app.directive('newsList', [ "BASE_URL", function (BASE_URL) {
    return {
        restrict: 'E',
        scope: {
            news: '=news'
        },
        templateUrl: BASE_URL.DEVELOPMENT+'/templates/news_list.html',
        controller: 'newActionsController'
    };
}]);
