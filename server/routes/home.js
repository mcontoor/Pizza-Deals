const Customer = require("../models/customer");
const Product = require("../models/product");
const PriceDeal = require("../models/priceDeals");
const QtyDeal = require("../models/qtyDeal");
const Cart = require("../models/cart");
const router = require("express").Router();

router.get("/", async (req, res) => {
  const data = await Product.find({});
  res.json(data);
});

// router.post("/checkout", (req, res) => {
//   const data = req.body;
//   var items = data.items;
//   let count = 0;
//   for (var i = 0; i < items.length; i++)
//     if (items[i] === "small pizza") {
//       count = count + 1;
//     }
//   Offer.findOne({ company: "Infosys" })
//     .populate("pizza")
//     .exec(function(err, data) {
//       if (err) throw err;
//       console.log(data);
//     });
// });

router.get("/cart/:id", async (req, res) => {
  // res.send(req.session);
  const id = req.params.id;

  var cart = await new Cart(
    req.session.cart ? req.session.cart : { items: {} }
  );
  const data = await Product.findOne({ _id: id });
  console.log(data);
  // res.json(req.session);
  cart.add(data, id);
  // res.json(cart);
  req.session.cart = cart;
  res.json(req.session.cart);

  //   QtyDeal.find({})
  //     .populate({ path: "Product", select: "name" })
  //     .exec((err, data) => {
  //       if (err) throw err;
  //       console.log(data);
  //     });
});

module.exports = router;
