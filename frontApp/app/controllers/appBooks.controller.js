angular.module("appCatalog").controller("appBooksController", [
    "$scope",
    "$element",
    "$attrs",
    "dataCoacher",
    "$log",
    function($scope, $element, $attrs, dataCoacher, $log) {
        var ctrl = this;
        dataCoacher.books.then(function(response) {
            ctrl.books = response.data;
        });
        dataCoacher.authors.then(res => {
            ctrl.authors = res.data;
        });
        dataCoacher.genres.then(res => {
            ctrl.genres = res.data;
        });

        ctrl.filters = {
            genre: "genre",
            author: "author"
        };

        ctrl.genreFilter = "";
        ctrl.authorFilter = "";
    }
]);
