angular.module("appCatalog").controller("appBooksController", [
    "$scope",
    "$element",
    "$attrs",
    "dataCoacher",
    "$log",
    function($scope, $element, $attrs, dataCoacher, $log) {
        var ctrl = this;
        dataCoacher.then(function(response) {
            ctrl.books = response.data;
        });

        ctrl.filters = {
            genre: "genre",
            author: "author"
        };

        ctrl.genreFilter = "";
        ctrl.authorFilter = "";
    }
]);
