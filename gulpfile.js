const gulp = require('gulp');
let uglify = require('gulp-uglify-es').default;
var wrap = require("gulp-wrap");
var pipeline = require('readable-stream').pipeline;

gulp.task('default', function() {
  return pipeline(
    gulp.src('./index.js'),
    wrap(`
        <%= contents %>
        ;
        module.exports = {
          goog,
          i18n
        };
    `),
    uglify(),
    gulp.dest('dist')
);
});