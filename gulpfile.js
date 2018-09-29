var gulp = require('gulp');
var browserSync = require('browser-sync');

gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: './',
        },
        // Change the default port
        port: 8000,
    });
});

gulp.task('watch', ['browserSync'], function() {
    gulp.watch('js/*.js', browserSync.reload);
    gulp.watch('css/*.css', browserSync.reload);
    gulp.watch('index.html', browserSync.reload);
    gulp.watch('restaurant.html', browserSync.reload);
    gulp.watch('data/restaurants.json', browserSync.reload);
});
