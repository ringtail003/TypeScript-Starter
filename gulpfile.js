var gulp = require('gulp');
var typescript = require('gulp-typescript');
var browserSync = require('browser-sync').create();
var del = require('del');
var config = require('./tsconfig.json');

gulp.task('clean:dist', function(){
  return del.sync(['dist/*']);
});

gulp.task('compile:ts', function(){
  return gulp.src(['src/ts/*.ts'])
    .pipe(typescript(config.compilerOptions))
    .js
    .pipe(gulp.dest('dist/js/'));
});

gulp.task('copy:bower', function(){
  return gulp.src(['src/js/bower_components/**'], { base: 'src/js' })
    .pipe(gulp.dest('dist/js/'));
});

gulp.task('copy:html', function(){
  return gulp.src(['src/*.html'])
    .pipe(gulp.dest('dist/'));
});

gulp.task('watch', function(){
  gulp.watch([
    'src/ts/*.ts',
    'src/*.html'
  ], ['compile:ts','copy:html']);
});

gulp.task('server', function(){
  browserSync.init({
    server: {
      baseDir: 'dist'
    },
    files: ['dist/*']
  });
});

gulp.task('default',['clean:dist','compile:ts','copy:html','copy:bower','server','watch']);
