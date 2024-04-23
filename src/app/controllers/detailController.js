const productModel = require('../models/products');
var moment = require('moment');

class DetailController {
    // [GET] home
    index(req, res) {
        productModel.find({_id:req.query.id}).lean()
            .then((products) => {
                if (products) {
                    res.render('detail', {product: products[0], moment: moment})
                } else {console.log("Can't find product")}
            })
            .catch((err) => {console.log(err);})
        
    }
}

module.exports = new DetailController();
