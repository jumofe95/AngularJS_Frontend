app.factory('ApiService', ['$http', 'SERVERS', function ($http, SERVERS) {
    const API_URL = SERVERS.DEVELOPMENT;
    var timeout = 10000;
    var headers = {
        "Content-Type": "application/json"
    };
    return {
        getAllNews: function () {
            return $http({
                method:"GET",
                url: API_URL + "/news/all",
                timeout: timeout,
                headers: headers
            });
        },

        archiveNew: function (new_id) {
            return $http({
                method:"PUT",
                url: API_URL + "/news/"+ new_id +"/archive",
                timeout: timeout,
                headers: headers
            });
        }
    }
}]);
