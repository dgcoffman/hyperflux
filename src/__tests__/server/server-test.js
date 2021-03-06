var chai = require('chai');
var chaiHttp = require('chai-http');
chai.use(chaiHttp);

describe('Server', function () {
  var app = require('../../server/server.js');

  it('should respond to a get request to the root', function (done) {
    chai.request(app)
      .get('/')
      .end(function (err, res) {
        expect(res.status).toBe(200);
        done();
      });
  });

  describe('uploading a file', function () {
    it('should not accept empty requests', function (done) {
      chai.request(app)
        .post('/playlists')
        .end(function (err, res) {
          expect(res.status).toBe(400);
          done();
        });
    });

    it('should accept files of type mp3', function (done) {
      var filename = 'src/__tests__/fixtures/08 - Hunger Of The Pine.mp3';
      chai.request(app)
        .post('/playlists')
        .attach('uploadForm', filename)
        .end(function (err, res) {
          expect(res.status).toBe(200);
          done();
        });
    });

    it('should reject non-audio file', function (done) {
      chai.request(app)
        .post('/playlists')
        .attach('uploadForm', 'src/__tests__/fixtures/spacer.gif')
        .end(function (err, res) {
          expect(res.status).toBe(400);
          done();
        });
    });
  });
});

