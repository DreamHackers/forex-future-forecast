var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');

gulp.task('jsx', function() {
  browserify('public/js/app.jsx', { debug: true })
    .transform(babelify)
    .bundle()
    .on("error", function (err) { console.log("Error : " + err.message); })
    .pipe(source('bundle-jsx.js'))
    .pipe(gulp.dest('./public/js/dest'))
});

gulp.task('browserify', function() {
  browserify('public/js/main.js', { debug: true })
    .transform(babelify)
    .bundle()
    .on("error", function (err) { console.log("Error : " + err.message); })
    .pipe(source('bundle-js.js'))
    .pipe(gulp.dest('./public/js/dest'))
});

gulp.task('watch', function() {
  gulp.watch('public/js/*.jsx', ['browserify'])
});

gulp.task('default', ['jsx','browserify']);
