var gulp = require('gulp');
var ts = require('gulp-typescript');

var tsProject = ts.createProject('tsconfig.json');

gulp.task('typescript', function() {
  return tsProject.src()
    .pipe(tsProject()) //pipe another flow: compile using options in tsProject (tsconfig file)
    .pipe(gulp.dest('')); // output to root of folder
    // can add other tasks like bundle/uglyfying/minifying
});

gulp.task('watch', function(){
  gulp.watch('*.ts', ['typescript']);
});

gulp.task('default', ['watch']);
