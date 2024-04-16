const mongoose = require('mongoose')

const Product = new mongoose.Schema({
    name: {type: String, maxLength: 255},
    folder: {type: String, maxLength: 255},
    logo: {type: String, maxLength: 255},
    priceCents: {type: Number, min: 0},
    title: {type: String, maxLength: 255},
    description: {type: String, maxLength: 5000},
    images: {type: [String]},
    videos: {type: [String]},
    rating: {type: mongoose.Schema.Types.Mixed},

}, {
    timestamps: true,
})

module.exports = mongoose.model('Product', Product);