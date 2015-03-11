jest.dontMock('../../client/js/components/Task.jsx');

describe('Task', function () {
  it('should render with a checkbox', function () {
    var React = require('react/addons');
    var Task = require('../../client/js/components/Task.jsx');
    var TestUtils = React.addons.TestUtils;

    var taskComponent = TestUtils.renderIntoDocument(
      <Task  />
    );
    var task = TestUtils.scryRenderedDOMComponentsWithTag(taskComponent, 'checkbox');
    expect(task).toBeDefined();
  });
});
