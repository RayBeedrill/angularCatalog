function headerController($scope, $element, $attrs) {
    var ctrl = this;

    ctrl.menuItems = [
        {
            name: 'Home',
            link: 'books'
        },
        {
            name: 'By Genres',
            link: 'byGenres'
        },
        {
            name: 'By Authors',
            link: 'byAuthors'
        }
    ];

    ctrl.brand = 'Catalog';
}

angular.module('appCatalog').component('appHeader', {
    templateUrl: 'views/header/header.template.html',
    controller: headerController
});