'use strict';

global.$ = {
    gulp: require('gulp'),
    babel: require('gulp-babel'),
    glp: require('gulp-load-plugins')(),
    bs: require('browser-sync').create(),
    path: {
        tasks: require('./gulp/config/tasks.js')
    }
};

$.path.tasks.forEach(function (taskPath) {
    require(taskPath)();
});

$.gulp.task('default', $.gulp.series(
    $.gulp.parallel('pug','scss', 'scss:libs', 'scripts', 'script:lib', 'img', 'fonts'),
    $.gulp.parallel('watch','serve')
));

$.gulp.task('build', $.gulp.series(
    $.gulp.parallel('pug', 'scss', 'scss:libs', 'scripts', 'script:lib', 'img', 'img:min', 'svg', 'fonts'),
    $.gulp.parallel('watch','serve')
));
