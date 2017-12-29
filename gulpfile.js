var gulp = require('gulp');
var uglify = require('gulp-uglify');
var gutil = require('gulp-util');
var del = require('del');

gulp.task('default', ['build']);

/////////////////////////////
//Build tasks : start
/////////////////////////////
gulp.task('build', ['build:scripts']);
gulp.task('build:scripts', ['build:removefolders'], function(){
    gulp.src('src/**/**/*.js')
        .pipe(uglify())
        .on('error', function (err) { gutil.log(gutil.colors.red('[Error]'), err.toString()); })
        .pipe(gulp.dest('dist'));
});
gulp.task('build:removefolders', function(){
    del([
        'dist/**',
    ]);
});
//////////////////////////////
//Build tasks : end
//////////////////////////////

// gulp.task('setup', ['build'], function(){
//     fs.writeFileSync('tempPath.txt', '', {encoding: 'utf8'}); 
// });

gulp.task('watch', function(){
    gulp.watch('src/**', ['build']);
});