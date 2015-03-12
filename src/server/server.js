var express = require('express');
var multer = require('multer');
var app = express();
var done = false;
var validRequest = false;

app.use('/', express.static(__dirname + '/../../dist/'));

app.use(multer({
  dest: './uploads/',
  rename: function (fieldname, filename) {
    return filename + Date.now();
  },
  onFileUploadStart: function (file) {
    validRequest = file.extension === 'mp3' && (file.mimetype === 'audio/mpeg' || file.mimetype === 'audio/mp3');
  },
  onFileUploadComplete: function () {
    done = true;
  }
}));

app.post('/upload', function (req, res) {
  if ((Object.keys(req.files)).length === 0) {
    res.status(400).end('No file selected for upload');
  }
  else if (!validRequest) {
    res.status(400).end('Invalid file type');
  }
  else if (done === true) {
    res.status(200).end('File uploaded.');
  }
});

app.listen(3000);

module.exports = app;
