angular.module("appCatalog").directive("appFilter", function() {
    return {
        restrict: "E",
        scope: { books: "=", typeAttr: "=typeAttr", currentValue: "=" },
        template:
            "<select ng-model='currentValue' class='form-control form-group'><option value=''>Select {{typeAttr}}</option><option ng-repeat='item in books' value='{{item[typeAttr]}}'>{{item[typeAttr]}}</option></select>"
    };
});
