jest.dontMock('../../server/server.js');

describe('Server', function () {
  var app = require('../../server/server.js');

  it('should respond to a get request to the root', function () {
    var superTest = require('supertest');
    superTest(app)
      .get('/')
      .expect(200)
      .end(function(err){
        if (err) throw err;
      });
  });

  it('should not accept files not of type mp3', function () {
    var superTest = require('supertest');
    superTest(app)
      .post('/upload')
      .attach('spacer', 'src/__tests__/fixtures/spacer.gif')
      .expect(400)
      .end(function(err){
        if (err) throw err;
      });
  });

  it('should not accept empty requests', function () {
    var superTest = require('supertest');
    superTest(app)
      .post('/upload')
      .expect(400)
      .end(function(err){
        if (err) throw err;
      });
  });
});
