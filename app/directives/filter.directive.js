angular.module("appCatalog").directive("appFilter", function() {
    return {
        restrict: "E",
        scope: {
            books: "=",
            typeAttr: "=",
            currentFilter: "="
        },
        template:
            "<select><option ng-repeat='item in books'>{{item[typeAttr]}}</option></select>"
    };
});
