var gulp        = require('gulp');
var config      = require('../../config').copysvg.production;

/**
 * Copy svgs to folder
 */
gulp.task('copy:svg:production', function() {
  return gulp.src(config.src)
    .pipe(gulp.dest(config.dest));
});
