// ./public/js/route/configRoute.js

angular.module('contact')

.config(function ($routeProvider, $locationProvider) {

$locationProvider.hashPrefix('');

$routeProvider.when('/contacts', {
templateUrl: 'partials/contacts.html',
controller: 'contactsCtrl'
});

$routeProvider.when('/contact', {
templateUrl: 'partials/contact.html',
controller: 'contactCtrl'
});

$routeProvider.when('/contact/:id', {
templateUrl: 'partials/contact.html',
controller: 'contactCtrl'
});

$routeProvider.otherwise({ redirectTo: '/contacts' });

});