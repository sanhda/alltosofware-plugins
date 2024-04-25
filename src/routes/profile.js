const express = require('express');
const router = express.Router();
const { requireAuth } = require('../app/middlewares/authMiddleware.js')

const profileController = require('../app/controllers/ProfileController');

router.get('/', requireAuth, profileController.index);
router.post('/', requireAuth, profileController.update);

module.exports = router;
