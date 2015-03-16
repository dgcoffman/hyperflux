const React = require('react');

const Router = require('react-router');

var RouteHandler = Router.RouteHandler;

let App = React.createClass({
  render() {
    return (
        <RouteHandler />
    );
  }
});

module.exports = App;
