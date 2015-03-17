const React = require('react');
const App = require('./components/App.jsx');
const PlayList = require('./components/PlayList.jsx');
const FileUploader = require('./components/FileUploader.jsx');
const Router = require('react-router');

var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var Route = Router.Route;

var routes = (
  <Route handler={App}>

    <Route name="playlist" path="/playlist/:playListId"  handler={PlayList} />
    <Route name="upload" handler={FileUploader}/>
    <DefaultRoute handler={FileUploader}/>

  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler />, document.getElementById('main'));
});



