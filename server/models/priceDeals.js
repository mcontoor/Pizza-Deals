var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var priceDealSchema = new Schema({
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "customer"
  },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "products"
  },
  price: {
    type: Number,
    required: false
  }
});

module.exports = mongoose.model("PriceDeals", priceDealSchema);
