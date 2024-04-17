const express = require('express');
const router = express.Router();
const uploader = require('./pulisherUploader.js');

const pulisherController = require('../app/controllers/PulisherController');

router.get('/create', pulisherController.createProduct);

router.post('/submit', uploader(), pulisherController.submitProduct);

router.get('/', pulisherController.index);

module.exports = router;
