class PulisherController {
    // [GET] home
    index(req, res) {
        res.send("Index")
    }

    createProduct(req, res) {
        res.render('submit-product')
    }

    submitProduct(req, res) {
        console.log(req.body)
        res.send(req.body)
    }
}

module.exports = new PulisherController();
