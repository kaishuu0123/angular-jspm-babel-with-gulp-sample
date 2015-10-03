var gulp = require('gulp');
var browserSync = require('browser-sync');

gulp.task('bs-reload', function () {
  browserSync.reload();
});

gulp.task('watch', function () {
  gulp.watch(['*.html'], ['bs-reload']);
  gulp.watch(['./app/**/*.js'], ['bs-reload']);
})

gulp.task('browser-sync', function () {
  browserSync({
    server: {
      baseDir: ['.', 'app']
    }
  })
});

gulp.task('default', ['browser-sync', 'watch']);
