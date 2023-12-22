const { series, src, dest, watch, parallel } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function compilaSCSS(){
    return src('./src/scss/*.scss')
    .pipe(sass())
    .pipe(dest('./dist/css/',{filename: 'all.css'}));
}



function watcher(){
    watch("src/scss/**/*scss",compilaSCSS)
}
exports.watcher = watcher;
exports.compilaSCSS = compilaSCSS;

exports.tarea = series(compilaSCSS, watcher);
