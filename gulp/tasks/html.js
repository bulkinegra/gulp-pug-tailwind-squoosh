const { src, dest } = require('gulp');
const plumber = require('gulp-plumber');
const htmlmin = require('gulp-htmlmin');
const pug = require('gulp-pug');


module.exports = function html() {
    return src(process.env.SRC_DIR+'/pages/*.pug')
    .pipe(plumber())
    .pipe(pug())
    .pipe(htmlmin({
        collapseWhitespace: true,
        removeComments: true
    }))
    .pipe(dest(process.env.BUILD_DIR))
}