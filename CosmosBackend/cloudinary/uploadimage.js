const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const express = require('express');
const multer = require('multer');
 
const app = express();
 
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'Singularity',
    format: async (req, file) => 'png',
    public_id: (req, file) => 'computed-filename-using-request',
  },
});
 
const parser = multer({ storage: storage });
 
app.post('/upload', parser.single('image'), function (req, res) {
  res.json(req.file);
});