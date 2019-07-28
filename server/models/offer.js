var mongoose = require("mongoose");
var Schema = mongoose.Schema;
require("mongoose-function")(mongoose);

var offerSchema = new Schema({
  company: {
    type: String,
    required: true
  },
  pizza: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Pizza",
    required: true
  },
  offer: {
    _id: "total",
    value: Function,
    required: true
  }
});

module.exports = mongoose.model("Offers", offerSchema);
