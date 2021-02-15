// ./public/js/controller/contactCtrl.js

angular.module('contact')

  .controller('contactCtrl', function ($scope, $routeParams, $http) {
    $scope.contact = {};
    $scope.message = {};
    $scope.operation = 'Editing an existing contact ...';

    var init = function (id) {
      var url = '/contacts/' + id;
      if (id) $http.get(url).then(success, error);
      else 
        $scope.operation = 'Creating a new contact ...';
    }
    success = function (contact) {
      $scope.contact = contact.data;
    }
    error = function (error) {
      $scope.message = "Could not perform operation ...!";
      console.log(error);
    }

    $scope.salvar = function (contact) {
      if (!contact.id) {
        criarNovoContato(contact);
      } else {
        atualizarContato(contact);
      }
    }

    var criarNovoContato = function (contact) {
      var url = '/contacts';
      $http.post(url, contact).then(listar, error);
    };

    const atualizarContato = function (contact) {
      var url = '/contacts/' + contact.id;

      $http.put(url, contact).then(listar, error);
    };

    listar = function () {
      location.assign("#/contacts");
    }

    init($routeParams.id);

  });