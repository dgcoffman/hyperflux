const React = require('react');
const Input = require('react-bootstrap/lib/Input');
const Panel = require('react-bootstrap/lib/Panel');

let FileUploader = React.createClass({
  getDefaultProps: function () {
    return {
      label: 'Upload File'
    };
  },
  render() {
    return (
      <div>
        <Panel header={this.props.label}>
          <form
            className = 'file-uploader'
            id        = 'uploadForm'
            encType   = 'multipart/form-data'
            action    = '/upload'
            method    = 'post' >
            <Input type='file' name='fileUpload' wrapperClassName='col-xs-6'/>
            <Input type='submit' defaultValue='Upload' name='submit' bsStyle='primary' wrapperClassName='col-xs-6'/>
          </form>
        </Panel>
      </div>
    );
  }
});

module.exports = FileUploader;




