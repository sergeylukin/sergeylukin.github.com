var gulp        = require('gulp');
var browsersync = require('browser-sync');
var config      = require('../../config').copysvg.development;

/**
 * Copy svgs to folder
 */
gulp.task('copy:svg', function() {
  return gulp.src(config.src)
    .pipe(gulp.dest(config.dest));
});

gulp.task('recopy:svg', ['copy:svg'], function() {
  browsersync.reload();
});
