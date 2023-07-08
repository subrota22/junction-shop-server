const  mongoose = require("mongoose");

const productCollectionSchema = new mongoose.Schema({

    category: {
        type: String,
        required: true,
    },

    rating: {
        type: Number,
        required: true,
    },

    price: {
        type: Number,
        required: true,
    },

    productImage: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },

});


const productCollection = mongoose.model("productCollection", productCollectionSchema);

module.exports = productCollection;

