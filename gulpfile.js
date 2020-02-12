//gulpfile.js

var gulp = require('gulp');
var fileinclude = require('gulp-file-include');

gulp.task('fileinclude', done => {
    gulp.src('src/*.html').pipe(fileinclude({
    	prefix: '@@',
    	basepath: '@file'
    })).pipe(gulp.dest('res/'));
    done();
});