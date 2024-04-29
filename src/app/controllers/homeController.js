const productModel = require('../models/products');
const categoryModel = require('../models/categories');

// Function to escape special characters in the search term for regex
function escapeRegex(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}

class HomeController {
    // [GET] home
    index(req, res) {

        // Get categories data from server
        let categories = [];
        categoryModel.find().lean()
            .then(function (categoriesData) {
                categories=categoriesData;

                // categories filter
                let query = {};
                if (req.query.category) {
                    query = { categories: req.query.category };
                }

                // appName filter
                if (req.query.appName) {
                    const escapedName = escapeRegex(req.query.appName);
                    const regex = new RegExp(escapedName, 'i');
                    query.appName = regex;
                }

                // Get products data from server and render home
                productModel.find(query).lean()
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
