var gulp = require('gulp');
var uglify = require('gulp-uglify');
var gutil = require('gulp-util');
var del = require('del');

gulp.task('default', ['build']);

/////////////////////////////
//Build tasks : start
/////////////////////////////
gulp.task('build', ['build:scripts']);
gulp.task('build:scripts', function(){
    gulp.src('src/**/**/*.js')
        .pipe(uglify())
        .on('error', function (err) { gutil.log(gutil.colors.red('[Error]'), err.toString()); })
        .pipe(gulp.dest('dist'));
});
gulp.task('build:removefolders', function(){
    del([
        'dist/**',
        'tempPath.txt'
    ]);
});
//////////////////////////////
//Build tasks : end
//////////////////////////////

gulp.task('watch', function(){
    gulp.watch('src/**', ['build']);
});