// ./public/js/controller/contactsCtrl.js

angular.module("contact")

.controller("contactsCtrl", function ($scope, $http) {

$scope.contacts = [];
$scope.message = {};

$scope.remove = function (contact) {
var url = '/contacts/' + contact.id;
$http.delete(url).then(loadContacts, error);
}

var loadContacts = function () {
$http.get("/contacts").then(success, error);
}

var success = function (contact) {
$scope.contacts = contact.data;
}

var error = function (error) {
console.log(error);
}

loadContacts();

});