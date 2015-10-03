var gulp = require('gulp');
var inlinesource = require('gulp-inline-source');
var config = require('../../config').inlinesource.production;

gulp.task('inlinesource:production', function () {
  var options = {
    compress: config.compress
  };

  return gulp.src(config.src)
    .pipe(inlinesource(options))
    .pipe(gulp.dest(config.dest));
});
