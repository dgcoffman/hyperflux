var gulp = require('gulp');
var jest = require('jest-cli');
var jasmine = require('gulp-jasmine');
var rmdir = require('rimraf');

var jestConfig = {
  rootDir: '.',
  testPathDirs: ['<rootDir>/src/__tests__/client/'],
  scriptPreprocessor: "<rootDir>/node_modules/babel-jest",
  testFileExtensions: [
    "es6",
    "js"
  ],
  moduleFileExtensions: [
    "js",
    "json",
    "es6"
  ],
  unmockedModulePathPatterns: [
    "node_modules/react",
    "node_modules/object-assign",
    "node_modules/express",
    "node_modules/supertest",
    "node_modules/chai",
    "node_modules/chai-http",
    "node_modules/multer"
  ]
};

gulp.task('test-client', function (done) {
  jest.runCLI({config: jestConfig}, ".", function () {
    rmdir('uploads', function (err) {
      if (err) {
        console.log(err);
      }
      done();
    });
  });
});

gulp.task('test-server', function () {
  return gulp.src('src/__tests__/server/**/*.js').pipe(jasmine({verbose: true}));
});

gulp.task('test', ['test-client', 'test-server'], function (done) {
  gulp.watch(jestConfig.rootDir + "/src/**/*.{js,jsx}", ['test-client']);
});
