module.exports = function () {
  $.gulp.task('watch', function () { //task for watching pug and sass files
    $.gulp.watch('src/pug/**/*.pug', $.gulp.series('pug'))
    $.gulp.watch('src/static/scss/**/*.scss', $.gulp.series('scss'))
    $.gulp.watch('src/static/js/**/*.js', $.gulp.series('scripts'))
    $.gulp.watch('src/static/img/**/*', $.gulp.series('img'))
    $.gulp.watch('src/static/img/svg/**/*.svg', $.gulp.series('svg'))
  });
}
