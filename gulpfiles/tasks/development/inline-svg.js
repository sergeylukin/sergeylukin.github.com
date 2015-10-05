var gulp        = require('gulp');
var config      = require('../../config').inlinesvg.development;
var inline      = require('gulp-inline');
var svgmin      = require('gulp-svgmin');
var browsersync = require('browser-sync');
var runSequence = require('run-sequence');

/**
 * Replace <use xlink:href="/path/to.svg#icon"></use> with target
 * SVG contents
 */
gulp.task('inline:svg', function() {
  return gulp.src(config.src)
    .pipe(inline({
      base: config.basePath,
      svg: svgmin,
      disabledTypes: ['img', 'js', 'css'], // only inline SVG
      ignore: []
    }))
    .pipe(gulp.dest(config.dest));
});

gulp.task('reinline:svg', function(callback) {
  runSequence(
    [
      'jekyll',
      'copy:svg'
    ],
    'inline:svg',
    function() {
      browsersync.reload();
      callback();
    }
  );
});
