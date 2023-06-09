const express = require("express");
const router = express.Router();

const { makePayment } = require("../controllers/payment-ctrl");

router.route("/payment").post(makePayment);

module.exports = router;
