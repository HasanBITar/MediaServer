const express = require('express');
const uploader = require('../middleware/fileUpload');
const fileController = require('../controllers/fileController');

const router = express.Router();

router.post('/upload', uploader.single('file'), fileController.uploadFile);


module.exports = router;
