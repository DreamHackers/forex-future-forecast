"use strict";

var gulp = require('gulp'),
    source = require('vinyl-source-stream'),
    browserify = require('browserify');

gulp.task('js', function() {
  browserify( {
    entries: ['public/js/main.js']
  } )
  .bundle()
  .pipe(source('build.js'))
  .pipe(gulp.dest('public/js/'));
});

gulp.task('default', ['js']);
