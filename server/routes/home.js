const Customer = require("../models/customer");
const Product = require("../models/product");
const PriceDeal = require("../models/priceDeals");
const QtyDeal = require("../models/qtyDeal");
const Cart = require("../models/cart");
const router = require("express").Router();

//Display pizzas on homepage
router.get("/", async (req, res) => {
  const data = await Product.find({});
  res.json(data);
});

//Customer Login
router.get("/customer/:name", async (req, res) => {
  const name = req.params.name;
  try {
    const customer = await Customer.findOne({ name: name });
    req.session.user = customer;
    res.json(req.session.user);
    if (req.session.cart) {
      delete req.session.cart;
    }
  } catch (e) {
    console.log(e);
  }
});

//Add to cart
router.get("/add/cart/:id", async (req, res) => {
  const id = req.params.id;

  var cart = await new Cart(
    req.session.cart ? req.session.cart : { items: {} }
  );
  const data = await Product.findOne({ _id: id });

  cart.add(data, id);
  req.session.cart = cart;
  res.json(req.session.cart);
});

//Delete from cart
router.get("/remove/:id", (req, res) => {
  var id = req.params.id;
  var cart = new Cart(req.session.cart ? req.session.cart : {});

  cart.remove(id);
  req.session.cart = cart;
  res.json(cart);
});

//Display cart with discounts
router.get("/cart", async (req, res) => {
  try {
    //Check if cart exists
    if (!req.session.cart) {
      res.json({ cart: "no items added to cart" });
    }
    var cart = new Cart(req.session.cart);

    //Check if user exists and apply discount rules
    if (!req.session.user || req.session.user.name === "Default") {
      res.json({ cart: cart.getItems(), cost: cart.totalPrice });
    } else {
      //Generate array of deals available for the user
      var companyDeals = [];
      var cartArr = cart.getItems();
      var qtyDeal = await QtyDeal.findOne({ customer: req.session.user._id });
      var priceDeal = await PriceDeal.findOne({
        customer: req.session.user._id
      });
      if (qtyDeal !== null) {
        companyDeals.push(qtyDeal);
      }
      if (priceDeal !== null) {
        companyDeals.push(priceDeal);
      }
      console.log(companyDeals);

      var discountedPrice = 0;

      //Iterate over the discounts to apply to cart
      for (var i = 0; i < companyDeals.length; i++) {
        var deal = companyDeals[i];
        var dealProductId = JSON.stringify(companyDeals[i].product);
        for (var j = 0; j < cartArr.length; j++) {
          var itemID = JSON.stringify(cartArr[j].item._id);
          if (dealProductId === itemID) {
            var lp = JSON.stringify("5d3ddd98c548b99f37ecb4d5");
            if (deal.price) {
              discountedPrice +=
                (cartArr[j].item.price - deal.price) * cartArr[j].qty;
              cart.discount(discountedPrice);
            }
            if (
              deal.purchaseSize === cartArr[j].qty ||
              cartArr[j].qty % deal.purchaseSize === 0
            ) {
              console.log("give quantity deal");
              discountedPrice +=
                cartArr[j].item.price * (cartArr[j].qty / deal.purchaseSize);
              cart.discount(discountedPrice);
            }
            console.log("Discounted Price is " + cart.totalDiscount);
          }
        }
      }
      res.json({
        items: cart.getItems(),
        price: cart.totalPrice,
        discountPrice: cart.totalDiscount
      });
    }
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
