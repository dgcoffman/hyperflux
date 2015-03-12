jest.dontMock('../../client/js/components/App.jsx');

describe('App', function () {
  var React = require('react/addons');
  var App = require('../../client/js/components/App.jsx');
  var TestUtils = React.addons.TestUtils;

  it('should render a file upload form', function(){
    var app = TestUtils.renderIntoDocument(
      <App  />
    );
    var fileUploader = TestUtils.findRenderedDOMComponentWithClass(app, 'file-uploader');
    expect(fileUploader).toBeDefined();

  });

  it('should have state with zero files', function(){
    var app = TestUtils.renderIntoDocument(
      <App  />
    );
    expect(app.state.files).toBeDefined();
    expect(app.state.files.length).toBe(0);
  });
});
