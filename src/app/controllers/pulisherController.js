const saveProduct = require('./saveProduct.js')

class PulisherController {
    // [GET] home
    index(req, res) {
        res.send("Index")
    }

    createProduct(req, res) {
        res.render('submit-product')
    }

    submitProduct(req, res) {
        saveProduct(req, res);
    }
}

module.exports = new PulisherController();
