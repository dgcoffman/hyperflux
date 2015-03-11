jest.dontMock('../js/components/TaskList.jsx');

describe('TaskList', function () {
  it('should show an alert for zero tasks', function () {
    var React = require('react/addons');
    var TaskList = require('../js/components/TaskList.jsx');
    var TestUtils = React.addons.TestUtils;

    var taskListComponent = TestUtils.renderIntoDocument(
      <TaskList />
    );
    var taskList = TestUtils.scryRenderedDOMComponentsWithTag(taskListComponent, 'Alert');
    console.log(taskList);
    expect(taskList).toBeDefined();
  });
});
