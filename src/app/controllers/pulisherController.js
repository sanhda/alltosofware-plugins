const UserModel = require('../models/users');
const productModel = require('../models/products');
var FileSaver = require('file-saver');

class PulisherController {
    // [GET] create product
    async createProduct(req, res) {
        let product = null;
        if (req.query.productId) {
            product = await productModel.findById(req.query.productId).lean();
        }

        res.render('pulisher', {product})
    }

    // [POST] download product
    async downloadProduct(req, res) {
        if (!req.body.productId) return res.status(422).json({errors: "Invalid product id"});

        const product = await productModel.findOne({_id: req.body.productId}).exec();
        if (!product) return res.status(422).json({errors: "Invalid product"});

        if (product.useFileLink == "False" && product.file.length) {
            return res.status(200).json({})

        } else if (product.useFileLink == "True" && product.fileLink) {
            return res.status(200).json({fileUrl: product.fileLink})
        }

        return res.status(422).json({errors: "Invalid product file or file link"});
    }

    // [POST] submit product
    async submitProduct(req, res) {
        let data = req.body

        // add files to data
        data['images'] = req.files['images']
        data['appIcon'] = req.files['appIcon']
        data['file'] = req.files['file']

        // modify product
        if (req.body.productId) {
            await productModel.findByIdAndUpdate(req.body.productId, data);
        }
        // create new product and save to server
        else {
            const product = new productModel(data);
            const savedProduct = await product.save()
            await UserModel.findByIdAndUpdate(req.body.ownerId, {$push: {products: savedProduct._id}}, { new: true });
        }        

        res.redirect('/')
    }
}

module.exports = new PulisherController();
