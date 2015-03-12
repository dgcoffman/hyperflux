jest.dontMock('../../client/js/components/PlayList.jsx');

describe('PlayList', function () {
  it('should show an alert for zero tasks', function () {
    var React = require('react/addons');
    var PlayList = require('../../client/js/components/PlayList.jsx');
    var TestUtils = React.addons.TestUtils;

    var playListComponent = TestUtils.renderIntoDocument(
      <PlayList />
    );
    var alertBox = TestUtils.findRenderedDOMComponentWithClass(playListComponent, 'alert');
    expect(alertBox).toBeDefined();
  });
});
