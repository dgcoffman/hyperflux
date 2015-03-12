jest.dontMock('../../client/js/components/FileUploader.jsx');

describe('FileUploader', function () {
  var React = require('react/addons');
  var FileUploader = require('../../client/js/components/FileUploader.jsx');
  var TestUtils = React.addons.TestUtils;

  it('should set a default label on the uploader', function () {

    var fileUploaderComponent = TestUtils.renderIntoDocument(
      <FileUploader />
    );
    expect(fileUploaderComponent.props.label).toBe('Upload File');
  });

  it('should override the default label on the uploader', function () {

    var someTitle = "push to prod";
    var fileUploaderComponent = TestUtils.renderIntoDocument(
      <FileUploader label={someTitle} />
    );
    expect(fileUploaderComponent.props.label).toBe(someTitle);
  });
});
