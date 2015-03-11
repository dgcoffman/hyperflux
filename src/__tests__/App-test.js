jest.dontMock('../js/components/App.jsx');

describe('App', function () {
  it('has two buttons', function () {
    var React = require('react/addons');
    var App = require('../js/components/App.jsx');
    var TestUtils = React.addons.TestUtils;

    var app = TestUtils.renderIntoDocument(
      <App  />
    );

    console.log(app.getDOMNode());

    var taskList = TestUtils.scryRenderedDOMComponentsWithTag(app, 'button');
    expect(taskList.length).toBe(2);
  });
});
