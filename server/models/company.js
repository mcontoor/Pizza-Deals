var mongoose = require("mongoose");
var Schema = mongoose.Schema;

const companySchema = new Schema({
  name: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Company", companySchema);
