var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var coffee = require('gulp-coffee');
var es = require('event-stream');
var jeditor = require("gulp-json-editor");
var preprocess = require('gulp-preprocess');
var connect = require('gulp-connect');
var mainBowerFiles = require('main-bower-files');
var ngAnnotate = require('gulp-ng-annotate');

gulp.task('server', function() {
    connect.server({
        livereload: true
    });
});

gulp.task('minify', function() {
     return gulp.src(['vendor/js/angular.js', 'vendor/js/*.js', 'app/js/*.js', 'app/js/**/*.js'])
        .pipe(ngAnnotate())
        .pipe(concat('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

gulp.task('concat-scripts', function() {
    return gulp.src(['vendor/js/angular.js', 'vendor/js/*.js', 'app/js/*.js', 'app/js/**/*.js'])
        .pipe(ngAnnotate())
        .pipe(concat('all.js'))
        .pipe(gulp.dest('dist'));
});

gulp.task('watch', function() {
    gulp.watch('app/js/*.js', ['concat-scripts', 'minify']);
});

gulp.task('pcg_mod', function() {
    gulp.src("vars.json")
        .pipe(jeditor({
            'version': '1.2.3'
        }))
        .pipe(gulp.dest(""));
});

gulp.task('html', function() {
    gulp.src('app/index.html')
        .pipe(preprocess({context: {NODE_ENV: 'production', DEBUG: false}}))//To set environment variables in-line,
        .pipe(gulp.dest('./dist/'))
        .pipe(gulp.dest(''))
});

gulp.task('bower', function() {
    return gulp.src(mainBowerFiles())
        .pipe(gulp.dest('vendor/js'));
});

gulp.task('default', ['server', 'watch']);
