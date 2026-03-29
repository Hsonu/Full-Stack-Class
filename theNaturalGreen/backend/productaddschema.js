const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    productName: {
        type: String,
        required : true
    },
    category: {
        type: String,
        required :true
    },
    units: {
        type: Number,
        required : true
    },
    rate: {
        type: Number,
        required: true
    },
    description: {
        type: String,
    }
})

const addProduct = mongoose.model("addProduct" , productSchema);

module.exports = addProduct;