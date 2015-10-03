var gulp    = require('gulp');
var ghPages = require('gulp-gh-pages');
var config  = require('../config').deploy;
 
gulp.task('deploy', ['build:production'], function() {
  return gulp.src(config.src)
    .pipe(ghPages(config.options));
});
