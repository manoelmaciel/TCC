const mongoose = require('mongoose');

module.exports = function() {
  const schema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    index: {
      unique: true
    }
  }
});

return mongoose.model("Contacts", schema);

}