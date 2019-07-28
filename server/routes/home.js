const router = require("express").Router();
const Pizza = require("../models/pizza");
const User = require("../models/user");
const Company = require("../models/company");
const Offer = require("../models/offer");

router.get("/", async (req, res) => {
  const data = await Pizza.find({});
  res.json(data);
});

router.post("/pizza", (req, res) => {
  var pizza = new Pizza();

  pizza.name = req.body.name;
  pizza.description = req.body.description;
  pizza.price = req.body.price;

  pizza.save().then(() => console.log(pizza));
});

router.post("/user", (req, res) => {
  var user = new User({
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
    company: req.body.company
  });
  user.save().then(() => console.log(user));
});

router.get("/company", async (req, res) => {
  const data = await Company.find({});
  res.json(data);
});

router.post("/checkout", (req, res) => {
  const data = req.body;
  var items = data.items;
  let count = 0;
  for (var i = 0; i < items.length; i++)
    if (items[i] === "small pizza") {
      count = count + 1;
    }
  Offer.findOne({ company: "Infosys" })
    .populate("pizza")
    .exec(function(err, data) {
      if (err) throw err;
      console.log(data);
    });
});

router.get("/offer", async (req, res) => {
  const data = await Offer.find({});
  res.json(data);
});

module.exports = router;
