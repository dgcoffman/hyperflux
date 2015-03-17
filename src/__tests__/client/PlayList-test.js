jest.dontMock('../../client/js/components/PlayList.jsx');
jest.dontMock('../utils/StubRouterContext.jsx');

var React = require('react/addons');
var TestUtils = React.addons.TestUtils;
var PlayList = require('../../client/js/components/PlayList.jsx');
var StubRouterContext = require('../utils/StubRouterContext.jsx');

describe('PlayList', function () {

  it('should show a message for zero songs', function () {
    var playListComponent = TestUtils.renderIntoDocument(
      <PlayList />
    );

    var message = TestUtils.findRenderedDOMComponentWithTag(playListComponent, 'strong');
    expect(message.props.children).toBe('You have no songs');
  });

  it('should have a playlist id on the props', function () {
    var somePlayListId = 'playlist123';
    var PlayListWithRouterContext = StubRouterContext(PlayList, {playListId: somePlayListId});
    var playlist = TestUtils.renderIntoDocument(<PlayListWithRouterContext />);
    var renderedProps = playlist._renderedComponent.props;
    expect(renderedProps.playListId).toBe(somePlayListId);
  });

});
