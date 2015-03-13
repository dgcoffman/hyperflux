const React = require('react');

let FileUploader = React.createClass({

  sendFile(file) {
    var uri = "/playlists";
    var xhr = new XMLHttpRequest();
    var fd = new FormData();

    xhr.open("POST", uri, true);
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
        // Handle response.
        alert(xhr.responseText); // handle response.
        // redirect to playlist view
      }
    };
    fd.append('myFile', file);
    // Initiate a multipart/form-data upload
    xhr.send(fd);
  },

  onDragOver(event) {
    event.dataTransfer.dropEffect = "copy";
    event.stopPropagation();
    event.preventDefault();

  },

  onDragEnter(event) {
    event.stopPropagation();
    event.preventDefault();

  },

  onDrop(event) {
    event.stopPropagation();
    event.preventDefault();

    var filesArray = event.dataTransfer.files;
    for (var i = 0; i < filesArray.length; i++) {
      this.sendFile(filesArray[i]);
    }
  },

  render() {
    return (
      <div id="dropzone" className='vcenter' onDrop={this.onDrop} onDragOver={this.onDragOver} onDragEnter={this.onDragEnter}>Drag a file here to begin</div>
    );
  }

});

module.exports = FileUploader;




