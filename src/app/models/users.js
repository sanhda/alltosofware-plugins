const mongoose = require('mongoose')

const User = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50,
        unique: true
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 8
    },
    icon: {type: String, default: '/img/icons/default-avartar.png'},
    contact: {type: mongoose.Schema.Types.Mixed, default: {phone: '', website: '', support: ''}},
    social: {type: mongoose.Schema.Types.Mixed, default: {youtube: '', linkedin: '', telegram: ''}}
});

module.exports = mongoose.model('User', User);
