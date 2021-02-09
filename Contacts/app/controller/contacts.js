// ./app/controller/contacts.js

module.exports = () => {

  var contacts = require('../model/contacts');
  var id = contacts.length;
  var controller = {};

  controller.create = function (req, res, next) {

    var newContact = {};

    newContact.id = ++id;
    newContact.name = req.body.name;
    newContact.email = req.body.email;
    contacts.push(newContact);
    res.statusCode = 201;

    res.send('Contact created ... Successfully!').end();

  }

  controller.retrieveAll = function (req, res, next) {
    res.statusCode = 200;
    res.json(contacts);
  }

  controller.retrieveOne = (req, res, next) => {
    var idContact = req.params.id;
    var contact = contacts.filter(function (contact) {
      return idContact == contact.id;
    })[0];
    if (contact) {
      res.statusCode = 200;
      res.json(contact);
      res.end();
    } else {
      res.statusCode = 404;
      res.end(`Contact ${idContact} not found ... !`);
    }
  }

  controller.update = (req, res, next) => {
    var idContact = req.params.id;
    var contactExists = contacts.filter(function (contact) {
      return idContact == contact.id;
    })[0];
    if (contactExists) {
      var contact = req.body;
      contact.id = req.params.id;
      contacts = contacts.map(function (contactMapped) {
      if (contactMapped.id == contact.id) {
        contactMapped.name = contact.name;
        contactMapped.email = contact.email;
      }
      return contactMapped;
    });
    res.statusCode = 200;
    res.send('Contact updated successfully ... !').end();
    } else {
      res.statusCode = 404;
      res.end('Contact not found ... !');
    }
  }

  controller.delete = (req, res, next) => {
    var idContact = req.params.id;
    contacts = contacts.filter(function (contactFiltered) {
      return idContact != contactFiltered.id;
    });
    res.statusCode = 200;
    res.send(`Contact ${idContact} deleted successfully ... !`).end();
  };

  return controller;

}


