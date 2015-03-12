const React = require('react');
const Song = require('./Song.jsx');
const ListGroup = require('react-bootstrap/lib/ListGroup');
const Alert = require('react-bootstrap/lib/Alert');

let PlayList = React.createClass({
  getDefaultProps() {
    return {
      songs: []
    };
  },

  render() {
    let {songs} = this.props;

    if (songs.length === 0) {
      return (
        <Alert bsStyle="warning">
          <strong>You have no songs</strong>
          Upload some.
        </Alert>
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