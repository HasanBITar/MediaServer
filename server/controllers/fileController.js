
const errorRespone = require('../utils')
const fileModel = require('../models/fileModel')
const config = require('../config')
const metaReader = require('../helpers/metaReader')

const uploadProfile = async (req, res) => {
    res.status(200).json({
        message: 'File uploaded successfully',
        file: req.file
    });
}

const getUserFiles = async (req, res) => {
    
}

const uploadFile = async (req, res) => {
    try{
        const file = req.file;
        const type = fileModel.getFileType(file.filename);
        let meta;
        if (type === fileModel.fileTypes.video){
            meta = metaReader.videoReader(file.path);
        }
        fileModel.uploadFile()
    }
    catch (err) {

    }
}

module.exports = { 
    uploadProfile,
    uploadFile,
};