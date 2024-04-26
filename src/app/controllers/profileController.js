const UserModel = require('../models/users');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

class ProfileController {
    // [GET] profile
    index(req, res) {
        res.render("profile")
    }

    // [POST] profile
    async update(req, res) {
        const body = req.body;
        
        let update = {
            username : req.body.userName,
            icon: req.body.icon,
            contact : req.body.contact,
            social : req.body.social
        }

        await UserModel.findOneAndUpdate({_id: req.body.userId}, update);

        res.status(201).json({errors: ''});
    }
}

module.exports = new ProfileController();

