const app = require("express")();
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

const PORT = 5000;

app.listen(PORT, () =>
  console.log("Server listening for requests on port " + PORT)
);
