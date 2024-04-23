const homeRouter = require('./home.js');
const detailRouter = require('./detail.js');
const pulisherRouter = require('./pulisher.js');
const registerRouter = require('./register.js');
const loginRouter = require('./login.js');

function router(app) {
    // [GET] detail
    app.use('/detail', detailRouter);

    // [GET] pulisher
    app.use('/pulisher', pulisherRouter);

    // [GET] register
    app.use('/register', registerRouter);

    // [GET] login
    app.use('/login', loginRouter);

    // [GET] home
    app.use('/', homeRouter);

}

module.exports = router;
