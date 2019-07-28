var Pizza = require("./pizza");
var mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/pizzadeals")
  .then(res => console.log("MongoDB connected"))
  .catch(err => console.log("Err at connection with mongo ", err));

var Pizzas = [
  new Pizza({
    name: "Small Pizza",
    description: "10 inch pizza for one",
    price: 269.99
  }),
  new Pizza({
    name: "Medium Pizza",
    description: "12 inch pizza for two",
    price: 269.99
  }),
  new Pizza({
    name: "Large Pizza",
    description: "15 inch pizza for four",
    price: 394.99
  })
];

var done = 0;
for (var i = 0; i < Pizzas.length; i++) {
  Pizzas[i].save((err, result) => {
    done++;
    if (done === Pizzas.length) {
      exit();
    }
  });
}

function exit() {
  mongoose.disconnect();
}
