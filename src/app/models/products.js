const mongoose = require('mongoose')

const Product = new mongoose.Schema({
    name: {type: String, maxLength: 255},
    shortDescription: {type: String, maxLength: 1000},
    description: {type: String, maxLength: 50000},
    file: {type: [mongoose.Schema.Types.Mixed]},
    fileLink: {type: String, maxLength: 255},
    useFileLink: {type: String},
    versionNumber: {type: String, maxLength: 20},
    versionDescription: {type: String, maxLength: 1000},
    appIcon: {type: [mongoose.Schema.Types.Mixed]},
    images: {type: [mongoose.Schema.Types.Mixed]},
    videos: {type: [String]},
    rating: {type: mongoose.Schema.Types.Mixed, default: {stars: 0, count: 0}}
}, {
    timestamps: true,
})

module.exports = mongoose.model('Product', Product);