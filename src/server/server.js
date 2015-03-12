var express = require("express");
var multer = require('multer');
var app = express();
var done = false;

// Serve root as static content
app.use('/', express.static(__dirname + '/../../dist/'));

app.use(multer({
  dest: './uploads/',
  rename: function (fieldname, filename) {
    return filename + Date.now();
  },
  onFileUploadStart: function (file) {
  },
  onFileUploadComplete: function (file) {
    done = true;
  }
}));

app.post('/api/photo', function (req, res) {

  if((Object.keys(req.files)).length === 0){
    res.status(400).send('No file selected for upload');
  }

  if (done == true) {
    res.end("File uploaded.");
  }
});

app.listen(3000, function () {
  console.log("Working on port 3000");
});

module.exports = app;
