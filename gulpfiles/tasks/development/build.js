var gulp        = require('gulp');
var runSequence = require('run-sequence');

/**
 * Run all tasks needed for a build in defined order
 */
gulp.task('build', function(callback) {
  runSequence(
    'delete',
    'modernizr',
    [
      'jekyll',
      'sass',
      'scripts',
      'images',
      'copy:fonts',
      'copy:svg'
    ],
    [
      'base64',
      'inline:svg'
    ],
    callback
  );
});
