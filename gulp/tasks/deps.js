var gulp = require('gulp');
var connect = require('gulp-connect');
var config = require('../config.js').deps;

gulp.task('deps', function() {
  gulp.src(config.src)
    .pipe(gulp.dest(config.dest))
    .pipe(connect.reload());
});
