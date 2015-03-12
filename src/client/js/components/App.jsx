const React = require('react');
const TodoStore = require('../stores/TodoStore');
const ActionCreator = require('../actions/TodoActionCreators');
const FileUploader = require('./FileUploader.jsx');

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
    TodoStore.addChangeListener(this._onChange);
  },

  componentWillUnmount() {
    TodoStore.removeChangeListener(this._onChange);
  },

  handleAddNewClick(e) {
    let title = prompt('Enter task title:');
    if (title) {
      ActionCreator.addItem(title);
    }
  },

  handleClearListClick(e) {
    ActionCreator.clearList();
  },

  render() {
    let {files} = this.state;
    return (
      <div className='container'>
        <FileUploader />
      </div>
    );
  }

});

module.exports = App;
