const gulp = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const uglifyCSS = require('gulp-uglifycss');
const concat = require('gulp-concat');
const htmlmin = require('gulp-htmlmin');

function minJS() {
    return gulp.src('src/**/*.js')
        .pipe(babel({
            comments: true,
            presets: ["env"]
        }))
        .on('error', e => console.log)
        .pipe(uglify())
        .pipe(concat('appJS.min.js'))
        .pipe(gulp.dest('./build/src/js'))
}

function minCSS() {
    return gulp.src('src/**/*.css')
        .pipe(uglifyCSS({ "uglyComments": true }))
        .pipe(concat('appCSS.min.css'))
        .pipe(gulp.dest('./build/src/css'))
}

function minHTML() {
    return gulp.src('index.html')
        .pipe(htmlmin({
            collapseWhitespace: true,
            removeComments: true
        }))
        .pipe(gulp.dest('./build'))
}

function copyImages() {
    return gulp.src('src/images/*')
        .pipe(gulp.dest('./build/src/images'))
}

gulp.task('minJS', minJS);
gulp.task('minHTML', minHTML);
gulp.task('minCSS', minCSS);
gulp.task('copyImages', copyImages);


module.exports = {
    copyImages,
    minHTML,
    minCSS,
    minJS
}
