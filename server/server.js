const app = require("express")();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const home = require("./routes/home");
const cors = require("cors");

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(cors());

mongoose.set("useNewUrlParser", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);
mongoose
  .connect("mongodb://localhost:27017/pizzadeals")
  .then(res => console.log("MongoDB connected"))
  .catch(err => console.log("Err at connection with mongo ", err));

const PORT = 5001;

app.use("/", home);

app.listen(PORT, () =>
  console.log("Server listening for requests on port " + PORT)
);
