const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    productName : {
        type: String,
        require: [true, "Please fill this field.."]
    },
    description : {
        type: String,
        require: [true, "Please fill this field.."]
    },
    price: {
        type: Number,
        require: [true, "Please fill this field.."]
    },
    stockQuantity: {
        type: Number,
    },
    image: {
        type: String
    },
    cloudId: {
        type: String
    },
    category : {
        type: Array,
    },
},{
    timestamps: true
})

const products = mongoose.model("products", productSchema);

module.exports = products;