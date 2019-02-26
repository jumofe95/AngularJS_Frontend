app.directive('newsList', [ "BASE_URL", "ApiService", function (BASE_URL, ApiService) {
    return {
        restrict: 'E',
        scope: {
            news: '=news'
        },
        templateUrl: BASE_URL.DEVELOPMENT+'/templates/news_list.html',
        link: function($scope, element, attrs) {
            $scope.archiveNew = function(new_id, $index) {
                ApiService.archiveNew(new_id).then(function (result) {
                    $scope.news.splice($index, 1); //remove the selected new from array for making more dynamic UX
                }, function (error) {
                    console.log(error);
                });
            };

            $scope.deleteNew = function(new_id, $index) {
                ApiService.deleteNew(new_id).then(function (result) {
                    $scope.news.splice($index, 1); //remove the selected new from array for making more dynamic UX
                }, function (error) {
                    console.log(error);
                });
            };
        }

    };
}]);
