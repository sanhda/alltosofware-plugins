const UserModel = require('../models/users');
const { registerValidator } = require('../validations/auth');
const bcrypt = require('bcryptjs');

class RegisterController {
    // [GET] register
    index(req, res) {
        res.render("register")
    }

    // [POST] register
    async submit(req, res) {

        const { error } = registerValidator(req.body);

        if (error) return res.status(422).send(error.details[0].message);

        const checkEmailExist = await UserModel.findOne({ email: req.body.email });

        if (checkEmailExist) return res.status(422).send('Email is exist');

        // encoding password for security
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(req.body.password, salt);

        try {
            // Create a new user instance with data from the request body
            const newUser = new UserModel({
                username: req.body.username,
                email: req.body.email,
                password: hashPassword
            });
    
            // Save the user to the database
            const savedUser = await newUser.save();
            await res.send(savedUser);

        } catch (error) {
            // Handle validation errors or other errors
            res.status(400).json(error);
        }
    }
}

module.exports = new RegisterController();
