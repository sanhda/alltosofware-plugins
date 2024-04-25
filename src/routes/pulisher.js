const express = require('express');
const router = express.Router();
const uploader = require('./pulisherUploader.js');
const { requireAuth } = require('../app/middlewares/authMiddleware.js')

const pulisherController = require('../app/controllers/PulisherController');

router.get('/', requireAuth, pulisherController.createProduct);
router.post('/', [requireAuth, uploader()], pulisherController.submitProduct);

module.exports = router;
