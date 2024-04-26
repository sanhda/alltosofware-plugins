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

    // [POST] review
    async review(req, res) {
        if (!req.body.productId) return res.status(422).json({errors: "Invalid product id"});

        const review = {
            userId: req.body.userId,
            userName: req.body.userName,
            comment: req.body.comment,
            rating: req.body.rating,
            createdAt: Date.now()
        }

        try {
            const product = await productModel.findById(req.body.productId);
            if (!product) return res.status(422).json({errors: "Invalid product"});

            // modify product
            await productModel.findByIdAndUpdate(req.body.productId, {$push: {reviews: review}}, { new: true });

            res.status(200).json({review: review});

        } catch (err) {
            // Handle validation errors or other errors
            res.status(400).json({ errors: err });
        }
    }
}

module.exports = new DetailController();
