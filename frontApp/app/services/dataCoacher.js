var catalogApp = angular.module("appCatalog");

catalogApp.factory("dataCoacher", [
    "$http",
    "$log",
    function($http, $log) {
        let dc = {
            books: $http({
                method: "GET",
                url: "/books/"
            }),
            booksById: function(id) {
                return $http({
                    method: "GET",
                    url: "/books/" + id
                });
            },
            authors: $http({
                method: "GET",
                url: "/authors/"
            }),
            genres: $http({
                method: "GET",
                url: "/genres/"
            })
        };
        return dc;
    }
]);
