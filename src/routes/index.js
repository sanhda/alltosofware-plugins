const homeRouter = require('./home.js');
const detailRouter = require('./detail.js');
const pulisherRouter = require('./pulisher.js');
const registerRouter = require('./register.js');
const loginRouter = require('./login.js');
const { checkUser } = require('../app/middlewares/authMiddleware.js')

function router(app) {
    app.get('*', checkUser)

    // [GET] detail
    app.use('/detail', detailRouter);

    // [GET] pulisher
    app.use('/pulisher', pulisherRouter);

    // [GET] register
    app.use('/register', registerRouter);

    // [GET] login
    app.use('/login', loginRouter);

    // [GET] logout
    app.use('/logout', (req, res) => {
        res.cookie('auth-jwt', '', {maxAge: 1})
        res.redirect('/')
    });

    // [GET] home
    app.use('/', homeRouter);

}

module.exports = router;
