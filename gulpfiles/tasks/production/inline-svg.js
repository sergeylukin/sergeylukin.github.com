var gulp        = require('gulp');
var config      = require('../../config').inlinesvg.production;
var inline      = require('gulp-inline');
var svgmin      = require('gulp-svgmin');

/**
 * Replace <use xlink:href="/path/to.svg#icon"></use> with target
 * SVG contents
 */
gulp.task('inline:svg:production', function() {
  return gulp.src(config.src)
    .pipe(inline({
      base: config.basePath,
      svg: svgmin,
      disabledTypes: ['img', 'js', 'css'], // only inline SVG
      ignore: []
    }))
    .pipe(gulp.dest(config.dest));
});
