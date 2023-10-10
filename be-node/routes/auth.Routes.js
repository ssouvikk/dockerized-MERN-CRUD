const express = require('express');
const { AuthController } = require('../app/Controllers');
const { isLoggedIn } = require('../app/Middlewares');

const router = express.Router();


router.post('/register', AuthController.register);
router.get('/verify-email/:token', AuthController.verifyEmail);
router.post('/login', AuthController.login);

router.post('/forgot-password', AuthController.forgotPassword);
router.post('/reset-password', AuthController.resetPassword);

router.post('/logout', isLoggedIn, AuthController.logout);
router.get('/me', isLoggedIn, AuthController.getMe);

module.exports = router;