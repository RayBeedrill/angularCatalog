var catalogApp = angular.module("appCatalog");

catalogApp.factory("dataCoacher", [
    "$http",
    "$log",
    function($http, $log) {
        return $http({
            method: "GET",
            url: "/data/books.json"
        });
    }
]);
