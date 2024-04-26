const express = require('express');
const router = express.Router();

const detailController = require('../app/controllers/DetailController');

router.get('/', detailController.index);
router.post('/review', detailController.review);

module.exports = router;
