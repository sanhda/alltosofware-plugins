const express = require('express');
const router = express.Router();

const homeController = require('../app/controllers/HomeController');
const verifyToken = require('../app/middlewares/authMiddleware');

router.get('/', homeController.index);

module.exports = router;
