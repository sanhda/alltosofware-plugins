const express = require('express');
const router = express.Router();

const registerController = require('../app/controllers/RegisterController');

router.post('/submit', registerController.submit);
router.get('/', registerController.index);

module.exports = router;
