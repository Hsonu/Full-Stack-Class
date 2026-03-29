const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: true,
        unique: true
    },
    category: {
        type: String,
        required: true
    },
    units: {
        type: Number,
        required: true
    },
    rate: {
        type: Number,
        required: true
    },
    description: {
        type: String,
    }
})
productSchema.index({ productName: 1 }, { unique: true });
const addProduct = mongoose.model("addProduct", productSchema);

module.exports = addProduct; 