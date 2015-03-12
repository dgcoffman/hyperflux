var gulp = require('gulp');
var jest = require('jest-cli');

var jestConfig = {
  rootDir: '.',
  "scriptPreprocessor": "<rootDir>/node_modules/babel-jest",
  "testFileExtensions": [
    "es6",
    "js"
  ],
  "moduleFileExtensions": [
    "js",
    "json",
    "es6"
  ],
  "unmockedModulePathPatterns": [
    "node_modules/react",
    "node_modules/object-assign",
    "node_modules/express",
    "node_modules/supertest",
    "node_modules/multer"
  ]
};

gulp.task('test-once', function(done) {
  jest.runCLI({ config : jestConfig }, ".", function() {
    done();
  });
});

gulp.task('test', ['test-once'], function(done) {
  gulp.watch(jestConfig.rootDir + "/src/**/*.{js,jsx}", [ 'test-once' ]);
});
