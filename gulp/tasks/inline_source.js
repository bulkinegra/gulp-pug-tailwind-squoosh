const {	src, dest } = require('gulp');
const inlinesource = require('gulp-inline-source');
 
module.exports = function inline_source() {
    return src(process.env.BUILD_DIR+'/*.html')
        .pipe(inlinesource())
        .pipe(dest(process.env.BUILD_DIR));
};