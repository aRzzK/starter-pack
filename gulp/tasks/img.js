module.exports = function () {
  $.gulp.task('img', () =>
    $.gulp.src('src/static/img/*')
      .pipe($.gulp.dest('build/static/img'))
  );
  $.gulp.task('img:min', () => {
    return $.gulp.src('build/static/img/*')
      .pipe($.glp.imagemin())
      .pipe($.gulp.dest('build/static/img'));
      }
  );
}
