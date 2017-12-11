var gulp = require('gulp');
var babel = require('gulp-babel');
// var exec = require('gulp-exec');

gulp.task('compile', function(){
    gulp.src('es6/**/*.js')
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(gulp.dest('es5'));
});

/*gulp.task('runnode', function () {
    gulp.src('es5/!**!/!*.js')
        .pipe();
});*/

gulp.task('watch', function(){
    gulp.watch('es6/**/*.js', ['compile']);
    // gulp.watch('es5/**/*.js', ['runnode']);
});

gulp.task('default', ['watch']);
