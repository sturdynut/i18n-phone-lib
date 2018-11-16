const gulp = require('gulp');
const umd = require('gulp-umd');
const uglify = require('gulp-uglify');

gulp.task('default', function() {
  return gulp.src('./index.js')
    .pipe(umd({
      templateName: 'amdCommonWeb',
      exports: function(file) {
        return {
          'goog': 'goog',
          'i18n': 'i18n'
        }
      }
    }))
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
});