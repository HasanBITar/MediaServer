const express = require('express');
const uploader = require('../middleware/fileUpload');

const router = express.Router();

router.post('/upload', uploader, authController.signupUser);


module.exports = router;
