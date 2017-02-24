const gulp = require('gulp');
const browserSync = require('browser-sync');

gulp.task('browserSync', function () {
  browserSync.init({
    server: {
      baseDir: 'public'
    }
  });
});

gulp.task('watch', ['browserSync'], function () {
  gulp.watch('public/*.html', browserSync.reload);
  gulp.watch('public/*.css', browserSync.reload);
  gulp.watch('public/*.js', browserSync.reload);
});
