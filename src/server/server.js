var express = require('express');
var multer = require('multer');
var Firebase = require('firebase');
var app = express();

var data = new Firebase('https://fiery-inferno-9101.firebaseio.com/');

app.use('/', express.static(__dirname + '/../../dist/'));

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
      var pushRef = data.push(
      {
        created: new Date().toISOString(),
        songs: [{
          originalName: file.originalname,
          name: file.name,
          encoding: file.encoding,
          mimeType: file.mimetype,
          path: file.path,
          extension: file.extension,
          size: file.size
        }]
      }, function (error) {
        if (error) {
          console.log(error);
        } else {
          res.status(200).end(JSON.stringify({
            playListId: pushRef.key()
          }));
        }
      });
  }
}));

app.post('/playlists', function (req, res) {
  if ((Object.keys(req.files)).length === 0) {
    res.status(400).end('No file selected for upload');
  }
});

app.listen(3000);

module.exports = app;
