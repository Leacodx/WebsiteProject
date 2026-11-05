const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'))

function sassfiles() {
  return src('scss/**/*.scss')
    .pipe(sass())
    .pipe(dest('css'))
}

function watcher() {
  watch(['scss/**/*.scss'], sassfiles)}

exports.default = series(sassfiles, watcher)
