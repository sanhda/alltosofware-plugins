const express = require('express');
const router = express.Router();
const uploader = require('./pulisherUploader.js');
const { requireAuth } = require('../app/middlewares/authMiddleware.js')

const pulisherController = require('../app/controllers/PulisherController');

router.get('/create', requireAuth, pulisherController.createProduct);

router.post('/submit', [requireAuth, uploader()], pulisherController.submitProduct);

router.get('/', pulisherController.index);

module.exports = router;
