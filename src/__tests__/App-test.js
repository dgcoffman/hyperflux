jest.dontMock('../js/components/App.jsx');

describe('App', function () {
  it('should have a task list with two buttons', function () {
    var React = require('react/addons');
    var App = require('../js/components/App.jsx');
    var TestUtils = React.addons.TestUtils;

    var app = TestUtils.renderIntoDocument(
      <App  />
    );
    var taskList = TestUtils.scryRenderedDOMComponentsWithTag(app, 'button');
    expect(taskList).toBeDefined();
    expect(taskList.length).toBe(2);
  });
});
