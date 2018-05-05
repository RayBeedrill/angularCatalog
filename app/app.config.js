angular.module('appCatalog')
.config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.when('/byAuthors',{
        template: '<app-by-authors></app-by-authors>'
    });

    $routeProvider.when('/byGenres', {
        template: '<app-by-genres></app-by-genres>'
    });

    $routeProvider.when('/books/:id', {
        template: '<app-book-detail></app-book-detail>'
    })
    
    $routeProvider.when('/books', {
        template: '<app-books></app-books>'
    })

    $routeProvider.otherwise({ redirectTo: '/books' });
}]);


