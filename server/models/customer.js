var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var customerSchema = new Schema({
  name: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Customer", customerSchema);
