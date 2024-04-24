const UserModel = require('../models/users');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

class LoginController {
    // [GET] login
    index(req, res) {
        res.render("login")
    }

    // [POST] login
    async submit(req, res) {

        const user = await UserModel.findOne({email: req.body.email});
        if (!user) return res.status(422).json({errors: "Invalid email or password"});

        const checkPassword = await bcrypt.compare(req.body.password, user.password);

        if (!checkPassword) return res.status(422).json({errors: "Invalid email or password"});

        // generate token and save to cookie
        const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET, { expiresIn: 60 * 60 * 24 });
        res.cookie('auth-jwt', token, {httpOnly: true, maxAge: 1000 * 60 * 60 * 24})

        // send user to front-end
        res.status(201).json({user: user._id});
    }
}

module.exports = new LoginController();
