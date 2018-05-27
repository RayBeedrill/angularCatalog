function appBookDetailController(
    $scope,
    $element,
    $attrs,
    $route,
    $log,
    dataCoacher
) {
    var ctrl = this;
    var id = $route.current.params.id;
    dataCoacher.booksById(id).then(function(response) {
        ctrl.info = response.data;
    });
}

angular.module("appCatalog").component("appBookDetail", {
    templateUrl: "views/content/books/bookDetail.template.html",
    controller: appBookDetailController
});
