var Offer = require("./offer");
var mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/pizzadeals")
  .then(res => console.log("MongoDB connected"))
  .catch(err => console.log("Err at connection with mongo ", err));

var Offers = [
  new Offer({
    company: "Infosys",
    pizza: "5d3d98ad94a1a819c65ffdf5",
    offer: function(count, price) {
      if (count === 3) {
        return 2 * price;
      }
    }
  })
];

var done = 0;
for (var i = 0; i < Offers.length; i++) {
  Offers[i].save((err, result) => {
    done++;
    if (done === Offers.length) {
      exit();
    }
  });
}

function exit() {
  mongoose.disconnect();
}
