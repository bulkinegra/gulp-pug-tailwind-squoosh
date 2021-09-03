const {	src, dest } = require('gulp');
const inlinesource = require('gulp-inline-source');
const htmlmin = require('gulp-htmlmin');
 
module.exports = function inline_source() {
    return src(process.env.BUILD_DIR+'/**/*.html')
        .pipe(htmlmin({
            collapseWhitespace: true,
            removeComments: true
        }))
        .pipe(inlinesource())
        .pipe(dest(process.env.DJANGO_FRONT_DIR));
};