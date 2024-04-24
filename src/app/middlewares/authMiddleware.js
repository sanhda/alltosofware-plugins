const jwt = require('jsonwebtoken');
const UserModel = require('../models/users');

// require user to access, otherwise redirect to login
const requireAuth = (request, response, next) => {
    const token = request.cookies['auth-jwt'];

    if (token) {
        jwt.verify(token, process.env.TOKEN_SECRET, (err, decodedToken) => {
            if (err) {
                console.log(err.message);
                response.redirect('/login');
            } else {
                console.log(decodedToken);
                next();
            }
        })
    }
    else {
        response.redirect('/login');
    }
};

// check current user
const checkUser = (request, response, next) => {
    const token = request.cookies['auth-jwt'];

    if (token) {
        jwt.verify(token, process.env.TOKEN_SECRET, async (err, decodedToken) => {
            if (err) {
                console.log(err.message);
                response.locals.user = null;
                next();
            } else {
                let user = await UserModel.findById(decodedToken._id).lean();
                response.locals.user = user;
                next();
            }
        })
    }
    else {
        response.locals.user = null;
        next();
    }
};

module.exports = { requireAuth, checkUser }