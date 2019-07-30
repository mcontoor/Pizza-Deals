var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var qtyDealSchema = new Schema({
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "customers"
  },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "products"
  },
  purchaseSize: {
    type: Number,
    required: true
  },
  costSize: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model("QtyDeal", qtyDealSchema);
