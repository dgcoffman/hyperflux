var express = require('express');
var multer = require('multer');
var Firebase = require('firebase');
var app = express();
var songs = [];

var data = new Firebase('https://fiery-inferno-9101.firebaseio.com/');

data.on("value", function (snapshot) {
  songs = snapshot.val();
}, function (errorObject) {
  console.log("The read failed: " + errorObject.code);
});

app.use('/', express.static(__dirname + '/../../dist/'));

app.get('/songs', function (req, res) {
  res.status(200).send(songs);
});

app.use(multer({
  dest: './uploads/',
  rename: function (fieldname, filename) {
    return filename + Date.now();
  },
  onFileUploadStart: function (file, req, res) {
    var validRequest = file.extension === 'mp3' && (file.mimetype === 'audio/mpeg' || file.mimetype === 'audio/mp3');
    if (!validRequest) {
      res.status(400).end('Invalid file type');
    }
  },
  onFileUploadComplete: function (file, req, res) {
    data.push(
      {
        originalName: file.originalname,
        name: file.name,
        encoding: file.encoding,
        mimeType: file.mimetype,
        path: file.path,
        extension: file.extension,
        size: file.size,
        timestamp: new Date()
      }, function (error) {
        if (error) {
          console.log(error);
        } else {
          data.once("value", function (data) {
            songs = data.val();
          });
          res.status(200).end('File uploaded.');
        }
      });
  }
}));

app.post('/upload', function (req, res) {
  if ((Object.keys(req.files)).length === 0) {
    res.status(400).end('No file selected for upload');
  }
});

app.listen(3000);

module.exports = app;
