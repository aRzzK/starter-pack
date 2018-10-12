module.exports = function () {
  $.gulp.task('script:lib', function () {
    return $.gulp.src([
      'node_modules/jquery/dist/jquery.min.js',
      'node_modules/swiper/dist/js/swiper.min.js',
    ])
    .pipe($.babel({
        presets: ['latest'],
        ignore: ['swiper.min.js']
    }))
    .on('error', console.error.bind(console))
    .pipe($.glp.concat('libs.min.js'))
    .pipe($.gulp.dest('build/static/js/'))
    .pipe($.bs.reload({
      stream: true
    }))
  });

  $.gulp.task('scripts', function () {
    return $.gulp.src('src/static/js/main.js')
    .pipe($.babel({
        presets: ['latest'],
        ignore: ['swiper.min.js']
    }))
    .on('error', console.error.bind(console))
    .pipe($.gulp.dest('build/static/js/'))
    .pipe($.bs.reload({
      stream: true
    }))
  });
}
