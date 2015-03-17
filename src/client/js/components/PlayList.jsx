const React = require('react');
const Song = require('./Song.jsx');
const Firebase = require('firebase');
const ReactFireMixin = require('reactfire');
const RouterMixin = require('react-router').State;

let PlayList = React.createClass({
  mixins: [ReactFireMixin, RouterMixin],
  getInitialState() {
    return {
      playListId: ''
    }
  },

  getDefaultProps() {
    return {
      songs: [],
      playListId: ''
    };
  },

  componentWillMount: function () {
    var firebaseRef = new Firebase("https://fiery-inferno-9101.firebaseio.com/");
    this.bindAsArray(firebaseRef, "items");
  },

  componentWillUnmount: function () {
    this.firebaseRef.off();
  },

  render() {
    let {songs} = this.props;

    if (songs.length === 0) {
      return (
          <strong>You have no songs</strong>
      );
    }

    return (
      <form>
        <ListGroup>
          {songs.map(song =>
              <Song song={song} />
          )}
        </ListGroup>
      </form>
    );
  }
});

module.exports = PlayList;
