const productModel = require('../models/products');
const categoryModel = require('../models/categories');

class HomeController {
    // [GET] home
    index(req, res) {

        // Get categories data from server
        let categories = [];
        categoryModel.find().lean()
            .then(function (categoriesData) {
                categories=categoriesData;

                // Get products data from server and render home
                productModel.find().lean()
                .then(function (products) {
                    res.render("home", {products: products, categories: categories})
                })
            })
            .catch(function (err) {
                console.log(err);
            })
            
    }
}

module.exports = new HomeController();
