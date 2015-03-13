const React = require('react');
const FileUploader = require('./FileUploader.jsx');

let App = React.createClass({
  render() {
    return (
        <FileUploader />
    );
  }
});

module.exports = App;
