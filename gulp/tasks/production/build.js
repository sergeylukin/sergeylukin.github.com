var gulp        = require('gulp');
var runSequence = require('run-sequence');

/**
 * Run all tasks needed for a build in defined order
 */
gulp.task('build:production', function(callback) {
  runSequence(
    'delete',
    'modernizr',
    'jekyll:production',
    [
      'sass',
      'scripts',
      'images',
      'fonts'
    ],
    'base64',
    [
      'optimize:css',
      'optimize:js',
      'fonts:production'
    ],
    'inlinesource:production',
    'revision',
    'rev:collect',
    callback
  );
});
