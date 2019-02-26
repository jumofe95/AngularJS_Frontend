var app = angular.module("myshop", ["ngRoute"]);

app.constant('SERVERS',{
    DEVELOPMENT: "http://localhost:3000/api"
});
app.constant('BASE_URL',{
    DEVELOPMENT: "http://news.local"
});
