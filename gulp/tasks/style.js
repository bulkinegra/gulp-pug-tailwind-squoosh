const { src, dest } = require('gulp');
const plumber = require('gulp-plumber');
const postcss = require('gulp-postcss');
const clean = require('gulp-clean-css');

module.exports = function style(cb) {
    return src(process.env.SRC_DIR+'/styles/**/*.css')
    .pipe(plumber())
    .pipe(postcss([
        require('tailwindcss'),
        require('autoprefixer')
    ]))
    .pipe(clean())
    .pipe(dest(process.env.BUILD_DIR));
}
