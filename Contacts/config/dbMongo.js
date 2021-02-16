// ./config/dbMongo.js

const mongoose = require('mongoose');

module.exports = function (uri) {
  mongoose.connect(uri, { useMongoClient: true })
  mongoose.Promise = global.Promise

  mongoose.connection.on('connected', function () { console.log(`Mongoose! conectado em ${uri}`) });
  mongoose.connection.on('disconnected', function () { console.log(`Mongoose! desconectado de ${uri}`) });
  mongoose.connection.on('error', function (error) { console.log(`Mongoose! ${error}`) });

  process.on('SIGINT', function () {
    mongoose.connection.close(function () {
      console.log("Mongoose! desconectado pelo termino da aplicação")
      process.exit(0)
    })
  })

}
