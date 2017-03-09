const babel = require('babelify');
const gulp = require('gulp');
const browserSync = require('browser-sync');
const browserify = require('browserify');
const source = require('vinyl-source-stream');

gulp.task('browserSync', () => {
  browserSync.init({
    server: {
      baseDir: 'public'
    }
  });
});

gulp.task('browserify', () => {
  browserify('./spec/tests.js', { debug: true }).transform(babel, { presets: ['es2015'] }).bundle()
        .pipe(source('app-test.js'))
        .pipe(gulp.dest('./spec'));
});


gulp.task('watch', ['browserSync'], () => {
  gulp.watch('public/*.html', browserSync.reload);
  gulp.watch('public/css/*.css', browserSync.reload);
  gulp.watch('public/js/*.js', browserSync.reload);
});
