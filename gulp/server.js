const webserver = require('gulp-webserver');
const gulp =  require('gulp');
const gulpWatch = require('gulp-watch');

function server() {
    return gulp.src('./build')
        .pipe(webserver({
            port: 8080,
            open: false,
            livereload: true
        }))
}

function updateBuild(cb) {
    gulpWatch('./*.html', () => gulp.series('minHTML')())
    gulpWatch('./src/**/*.js', () => gulp.series('minJS')())
    gulpWatch('./src/**/*.css', () => gulp.series('minCSS')())
    gulpWatch('./src/images/*', () => gulp.series('copyImages')())
    return cb()
}

module.exports = {
    server,
    updateBuild
}