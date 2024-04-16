const productModel = require('../models/products');

class DetailController {
    // [GET] home
    index(req, res) {
        productModel.find({_id:req.query.id}).lean()
            .then((products) => {
                if (products) {
                    res.render('detail', {product: products[0]})
                } else {console.log("Can't find product")}
            })
            .catch((err) => {console.log(err);})
        
    }
}

module.exports = new DetailController();
