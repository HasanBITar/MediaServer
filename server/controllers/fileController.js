
const errorRespone = require('../utils')
const config = require('../config')

const uploadFile = async (req, res) => {
    res.status(200).json({
        message: 'File uploaded successfully',
        file: req.file
    });
}

module.exports = { uploadFile };