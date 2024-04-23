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
        if (!user) return res.redirect('/login?error=Invalid%20email');

        const checkPassword = await bcrypt.compare(req.body.password, user.password);

        if (!checkPassword) return res.redirect('/login?error=Invalid%20email%20or%20password');

        const token = jwt.sign({_id: user._id}, 'process.env.TOKEN_SECRET', { expiresIn: 60 * 60 * 24 });
        res.header('auth-token', token).send(token);
    }
}

module.exports = new LoginController();
