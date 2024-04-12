const homeRouter = require('./home.js')
const detailRouter = require('./detail.js')

function router(app) {

    // [GET] detail
    app.use('/detail', detailRouter)

    // [GET] home
    app.use('/', homeRouter)

}

module.exports = router;
