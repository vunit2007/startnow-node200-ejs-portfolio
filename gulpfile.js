var gulp   = require('gulp'),
    concat = require('gulp-concat'),
    sass   = require('gulp-sass'),
    connect = require('gulp-connect'),
    express = require('./server.js');

gulp.task('connect', function() {
    connect.server({
        root: 'public',
        livereload: true
    });
});

// Need to create a /sass folder inside your css
gulp.task('build-that-css', function() {
  return gulp.src('public/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('styles.css'))
    .pipe(gulp.dest('public/css'))
    .pipe(connect.reload());
});

// Gulp is watching you and your coding with the command: gulp watch
gulp.task('watch', function() {
  gulp.watch('public/scss/*.scss', ['build-that-css']);
});

gulp.task('default' , [ 'watch','connect'] , function(){
    express;
});

// npm install gulp-sass gulp-concat --save-dev
// npm install gulp@3.9.1
// gulp watch