const express = require('express');

const userConntroller = require('../controllers/user');

const router = express.Router();


router.post('/signup', userConntroller.signup);

// router.post('/login',);

module.exports = router;
