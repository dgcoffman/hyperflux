var gulp = require('gulp');
var jest = require('jest-cli');
var jasmine = require('gulp-jasmine');


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

gulp.task('test-once', function (done) {
  gulp.src('src/__tests__/server/**/*.js').pipe(jasmine());
  jest.runCLI({config: jestConfig}, ".", function () {
    done();
  });
});

gulp.task('test', ['test-once'], function (done) {
  gulp.watch(jestConfig.rootDir + "/src/**/*.{js,jsx}", ['test-once']);
});
