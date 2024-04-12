const express = require('express');
const router = express.Router();

const detailController = require('../app/controllers/DetailController')

router.use('/', detailController.index)

module.exports = router;