const React = require('react');
const Input = require('react-bootstrap/lib/Input');

let FileUploader = React.createClass({
  render() {
    return (
      <form
        id        =  "uploadForm"
        encType   =  "multipart/form-data"
        action    =  "/api/photo"
        method    =  "post" >
        <Input type="file" name="userPhoto" />
        <Input type="submit" value="Upload Image" name="submit" />
        </form>
    );
  }
});

module.exports = FileUploader;




