module.exports = function () {
  $.gulp.task('scss', function () {
    return $.gulp.src([
        'src/static/scss/style.scss',
        'src/static/scss/reset.scss',
        'src/static/scss/fonts.scss'
    ])
      .pipe($.glp.sourcemaps.init())
      .pipe($.glp.sass({
        'include css': true
      }))
      .pipe($.glp.csso())
      .pipe($.glp.autoprefixer({
          browsers: ['last 9 versions'],
        }))
      .pipe($.gulp.dest('build/static/css/'))
      .pipe($.bs.reload({
      stream: true
    }))
  });
    $.gulp.task('scss:libs', function () {
        return $.gulp.src([
            'node_modules/bootstrap/scss/bootstrap-grid.scss',
            'node_modules/swiper/dist/css/swiper.min.css'
        ])
            .pipe($.glp.sourcemaps.init())
            .pipe($.glp.sass({
                'include css': true
            }))
            .pipe($.glp.csso())
            .pipe($.glp.autoprefixer({
                browsers: ['last 9 versions'],
            }))
            .pipe($.gulp.dest('build/static/css/'))
            .pipe($.bs.reload({
                stream: true
            }))
    })
}
