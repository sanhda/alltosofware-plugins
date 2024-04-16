class PulisherController {
    // [GET] home
    index(req, res) {
        res.send("Index")
    }

    submitProduct(req, res) {
        res.render('submit-product')
    }
}

module.exports = new PulisherController();
