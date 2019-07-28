var Offer = require("./offer");
var mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/pizzadeals")
  .then(res => console.log("MongoDB connected"))
  .catch(err => console.log("Err at connection with mongo ", err));

var Offers = [
  new Offer({
    company: ObjectId("5d3d9ceab939cd22cb1e5638"),
    pizza: ObjectId("5d3d98ad94a1a819c65ffdf5"),
    offer: function(company, count, price) {
      if (company === "Infosys") {
        if (count === 3) {
          return 2 * price;
        }
      }
    }
  })
];
