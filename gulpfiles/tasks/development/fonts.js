var gulp   = require('gulp');
var config = require('../../config').fonts.development;

/**
 * Copy fonts to folder
 */
gulp.task('fonts', function() {
  return gulp.src(config.src)
    .pipe(gulp.dest(config.dest));
});
