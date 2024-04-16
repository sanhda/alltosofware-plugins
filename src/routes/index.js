const homeRouter = require('./home.js');
const detailRouter = require('./detail.js');
const pulisherRouter = require('./pulisher.js');

function router(app) {
    // [GET] detail
    app.use('/detail', detailRouter);

    // [GET] pulisher
    app.use('/pulisher', pulisherRouter);

    // [GET] home
    app.use('/', homeRouter);

}

module.exports = router;
