const productModel = require('../models/products');

class PulisherController {
    // [GET] home
    index(req, res) {
        res.send("Index")
    }

    createProduct(req, res) {
        res.render('submit-product')
    }

    submitProduct(req, res) {
        let data = req.body

        // add files to data
        data['images'] = req.files['images']
        data['appIcon'] = req.files['app-icon']
        data['file'] = req.files['file']

        // create new product and save to server
        const product = new productModel(data);
        const savedProduct = product.save()
        res.status(201).json({product: savedProduct._id});
    }
}

module.exports = new PulisherController();
