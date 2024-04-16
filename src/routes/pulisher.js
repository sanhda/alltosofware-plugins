const express = require('express');
const router = express.Router();

const pulisherController = require('../app/controllers/PulisherController');

router.get('/submit', pulisherController.submitProduct);
router.get('/', pulisherController.index);

module.exports = router;
