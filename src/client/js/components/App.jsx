const React = require('react');
const TodoStore = require('../stores/TodoStore');
const ActionCreator = require('../actions/TodoActionCreators');
const FileUploader = require('./FileUploader.jsx');
const PlayList = require('./PlayList.jsx');

let App = React.createClass({

  getInitialState() {
    return {
      files: []
    }
  },

  _onChange() {
    this.setState(TodoStore.getAll());
  },

  componentDidMount() {
    // TodoStore.addChangeListener(this._onChange);
  },

  componentWillUnmount() {
    // TodoStore.removeChangeListener(this._onChange);
  },

  handleClearListClick(e) {
    ActionCreator.clearList();
  },

  render() {
    let {files} = this.state;
    return (
      <div className='container'>
        <FileUploader />
        <PlayList />
      </div>
    );
  }

});

module.exports = App;
