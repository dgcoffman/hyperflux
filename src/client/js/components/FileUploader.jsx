const React = require('react');
const Input = require('react-bootstrap/lib/Input');

let FileUploader = React.createClass({
  getDefaultProps: function() {
    return {
      label: 'Upload File'
    };
  },
  render() {
    return (
      <form
        className = "form-horizontal file-uploader"
        id        = "uploadForm"
        encType   = "multipart/form-data"
        action    = "/upload"
        method    = "post" >
        <Input type="file" name="fileUpload" label="{this.props.label}" labelClassName="col-xs-2" wrapperClassName="col-xs-10"/>
        <Input type="submit" defaultValue="Upload" name="submit" bsStyle="primary" labelClassName="col-xs-2" wrapperClassName="col-xs-10"/>
      </form>
    );
  }
});

module.exports = FileUploader;




