var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var sass = require ('gulp-sass');

gulp.task('auto', function () {
    return gulp.src('css/style.css')
        .pipe(autoprefixer({
            browsers: ['last 20 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('css/'));
});