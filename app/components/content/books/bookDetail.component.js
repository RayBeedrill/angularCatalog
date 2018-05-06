function appBookDetailController(
    $scope,
    $element,
    $attrs,
    $route,
    dataCoacher
) {
    var ctrl = this;
    var id = $route.current.params.id;
    dataCoacher.then(function(response) {
        if (response.status == 200) {
            for (var item in response.data) {
                if (response.data[item].id == id) {
                    ctrl.info = response.data[item];
                }
            }
        }
    });
}

angular.module("appCatalog").component("appBookDetail", {
    templateUrl: "views/content/books/bookDetail.template.html",
    controller: appBookDetailController
});
