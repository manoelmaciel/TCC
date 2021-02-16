// ./app/route/contacts.js

module.exports = function (app) {

var controller = require('../controller/contacts')();

app.route('/contacts')

  .post(controller.create) // cria um novo contato

  .get(controller.retrieveAll); // recupera todos os contatos

app.route('/contacts/:_id')

  .get(controller.retrieveOne) // recupera um único contato pelo seu id

  .put(controller.update) // atualiza os campos de um contato pelo seu id

  .delete(controller.delete); // exclui um contato pelo seu id

}
