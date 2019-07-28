var mongoose = require("mongoose");
var Schema = mongoose.Schema();
require("mongoose-function")(mongoose);

var offerSchema = new Schema({
  company: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Company",
    required: true
  },
  pizza: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Pizza",
    required: true
  },
  offer: {
    type: Function,
    required: true
  }
});

module.exports = mongoose.model("Offers", offerSchema);
