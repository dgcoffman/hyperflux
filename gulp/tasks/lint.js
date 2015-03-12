var gulp = require('gulp');
var shell = require('gulp-shell');
var jsxHintConfig = require('../config').jshint;

gulp.task('lint', shell.task([
  'jsxhint ' + jsxHintConfig.src.join(' ')
]));

