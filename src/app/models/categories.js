const mongoose = require('mongoose')

const Category = new mongoose.Schema({
    name: {type: String, maxLength: 255}
})

module.exports = mongoose.model('Category', Category);