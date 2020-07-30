var sassToCSS = require('gulp-sass');



gulp.task('scss', function() {
  return gulp.src('src/scss/*.scss')
  .pipe(sassToCSS({ outputStyle: 'compressed' }))
 
})