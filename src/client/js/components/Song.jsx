const React = require('react');
const ListGroupItem = require('react-bootstrap/lib/ListGroupItem');

let Song = React.createClass({
  getDefaultProps() {
    return {
      song: {
        title: ''
      }
    };
  },

  render() {
    let {song} = this.props;
    return (
      <ListGroupItem>

      </ListGroupItem>
    );
  }
});

module.exports = Song;
