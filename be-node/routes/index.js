const express = require('express');

const authRoutes = require('./auth.Routes');
const contactRoutes = require('./contact.Routes');

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/contacts', contactRoutes);


module.exports = router;