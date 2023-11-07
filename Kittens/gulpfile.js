const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');

// Tarea "sass" para compilar los archivos .scss a la carpeta "css"
gulp.task('sass', function () {
  return gulp.src('sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('css/'));
});

// "sass:watch" --> cambios en archivos .scss y ejecutar "sass"
gulp.task('sass:watch', function () {
  gulp.watch('sass/*.scss', gulp.series('sass'));
});

// Tarea "minimitzacss" para minificar CSS
gulp.task('minimitzacss', function () {
  return gulp.src('css/*.css')
    .pipe(cleanCSS())
    .pipe(gulp.dest('dist/css'));
});

// Tarea para JS
gulp.task('comprimirJS', function () {
  return gulp.src('js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});

gulp.task('concatcss', function () {
  return gulp.src('dist/css/*.css')
    .pipe(concat('all.css'))
    .pipe(gulp.dest('dist/css'));
});

// Concatenar JS en "all.js"
gulp.task('concatjs', gulp.series('comprimirJS', function () {
  return gulp.src('dist/js/*.js')
    .pipe(concat('all.js'))
    .pipe(gulp.dest('dist/js'));
}));

// Todas (sin watchers)
gulp.task('kittens', gulp.series('sass', 'minimitzacss','comprimirJS', 'concatcss', 'concatjs'));
