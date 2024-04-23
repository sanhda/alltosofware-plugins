const productModel = require('../models/products');

function saveProduct(req, res) {
    let data = req.body

    // add files to data
    data['images'] = req.files['images']
    data['appIcon'] = req.files['app-icon']
    data['file'] = req.files['file']

    // create new product and save to server
    const product = new productModel(data);
    product.save()
    res.redirect('/')
}

module.exports = saveProduct