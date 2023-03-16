const express = require("express")

const prodRoute = express.Router()
const {newProducts, allProducts, singleProducts} = require("../controllers/products");

prodRoute.route("/prod").post(newProducts)
prodRoute.route("/all").get(allProducts)
prodRoute.route("/all/:prodId").get(singleProducts)

module.exports = prodRoute;