const productModel = require('../models/products');
const userModel = require('../models/users');
var moment = require('moment');

class DetailController {
    // [GET] home
    index(req, res) {

        // find product by id
        productModel.find({_id:req.query.id}).lean()
            .then((products) => {
                if (products) {

                    // find owner of product
                    userModel.find({_id: products[0].ownerId}).lean()
                    .then((owners)=> {

                        if (owners) {

                            // find other apps of owner
                            let otherProducts = []
                            let promises = [];
                            for (let i = 0; i < owners[0].products.length; i++) {
                                if (owners[0].products[i] != req.query.id) {
                                    promises.push(productModel.find({_id: owners[0].products[i]}).lean());
                                }
                            }

                            // Wait for all promises to resolve using Promise.all
                            Promise.all(promises)
                            .then((results) => {
                                // Iterate through the results array and push each product into otherProducts
                                results.forEach((result) => {
                                    otherProducts.push(result[0]);
                                });

                                // Render the page with the otherProducts array
                                res.render('detail', {product: products[0], owner: owners[0], otherProducts: otherProducts, moment: moment})
                            })
                            .catch((error) => {
                                console.error('Error fetching products:', error);
                                // Handle error
                                res.status(500).send('Internal server error');
                            });
                        }
                    })
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
