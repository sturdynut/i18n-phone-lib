const gulp = require('gulp');
const umd = require('gulp-umd');
const expose = require('gulp-expose');

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
    .pipe(expose('window', 'i18nPhoneLib'))
    .pipe(gulp.dest('tmp'));
});