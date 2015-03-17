const React = require('react');
const RouteHandler = require('react-router').RouteHandler;

let App = React.createClass({
  getHandlerKey: function () {
    var childDepth = 1; // assuming App is top-level route
    var key = this.getRoutes()[childDepth].name;
    var id = this.getParams().id;
    if (id) { key += id; }
    return key;
  },

  render: function () {
    return (
      <div>
        <RouteHandler key={this.getHandlerKey()} />
      </div>
    );
  }
});

module.exports = App;
