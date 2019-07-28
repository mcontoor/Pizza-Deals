var Company = require("./company");
var mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/pizzadeals")
  .then(res => console.log("MongoDB connected"))
  .catch(err => console.log("Err at connection with mongo ", err));

var Companies = [
  new Company({
    name: "Infosys"
  }),
  new Company({
    name: "Amazon"
  }),
  new Company({
    name: "Facebook"
  })
];

var done = 0;
for (var i = 0; i < Companies.length; i++) {
  Companies[i].save((err, result) => {
    done++;
    if (done === Companies.length) {
      exit();
    }
  });
}

function exit() {
  mongoose.disconnect();
}
