const app = require("express")();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

mongoose
  .connect("mongodb://localhost:27017/pizzedeals", { useNewUrlParser: true })
  .then(res => console.log("MongoDB connected"))
  .catch(err => console.log("Err at connection with mongo ", err));

const PORT = 5000;

app.listen(PORT, () =>
  console.log("Server listening for requests on port " + PORT)
);
