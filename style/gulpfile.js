// gulpfile.js
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

// Task: Compile SCSS to CSS
function compileSCSS() {
  return gulp.src('scss/style.scss')        // source SCSS files
    // .pipe(sass().on('error', sass.logError)) // compile and log errors
    .pipe(sass({style: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./'));                // output to css folder
}

// Watch SCSS files for changes
function watchFiles() {
  gulp.watch('scss/**/*.scss', compileSCSS);
}

// Default task
exports.default = gulp.series(compileSCSS, watchFiles);
