const express = require('express');
const asyncHandler = require('express-async-handler');
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');
const { storage } = require('../cloudinary/uploadimage');
const { protect, isanswerauthor } = require('../middleware/authmw');

const router = express.Router();

router.use(bodyParser.urlencoded({extended: true}));

function checkFileType(file,cb) {

    const filetypes = /jpg|jpeg|png/
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase())
    const mimetype = filetypes.test(file.mimetype)
    if(extname && mimetype){
        return cb(null,true)
    }else{
        cb('Only Images are allowed')
    }

}

const upload =  multer({

    storage,
    fileFilter : function(req,file,cb) {
        checkFileType(file,cb)
    }

}) 

router.post('/',upload.array('image'),(req,res) => {
    const filePath = []
    for (var i = 0; i < req.files.length; i++) {
        filePath.push(req.files[i].path)
    }
    console.log({filePath: filePath});
    res.json({filePath: filePath})
})

module.exports = router