// ./app/controller/contacts.js

module.exports = function () {

  const Contact = require('../model/contact')();

  var controller = {};

  controller.create = function (req, res) {
    var contact = new Contact();

    contact.name = req.body.name;
    contact.email = req.body.email;

    contact.save(function (error) {
      if (error)
        res.send(error);
      res.json({ message: 'Contact criado com sucesso ... !' });
    });
  };

  controller.retrieveAll = function (req, res) {

    Contact.find(function (err, contacts) {
      if (err)
        res.send(err);
      res.json(contacts);
    });

  };

  controller.retrieveOne = function (req, res) {
    Contact.findById(req.params._id, function (error, contact) {
      if (error) res.send(error);
      res.json(contact);
    });
  };

  controller.update = function (req, res) {

    Contact.findById(req.params._id, function (error, contact) {
      if (error) res.send(error);
      contact.name = req.body.name;
      contact.email = req.body.email;
      contact.save(function (error) {
        if (error) res.send(error);
        res.json({ message: 'Contato atualizado com sucesso ... !' });
      });
    });
  };

  controller.delete = function (req, res) {
    Contact.remove({
      _id: req.params._id
    }, function (error) {
      if (error) res.send(error);
      res.json({ message: 'Contato excluído com sucesso ... !' });
    });
  }

  return controller;

}
