const { src, dest } = require('gulp');
const fileinclude = require('gulp-file-include');
var multiDest = require('gulp-multi-dest');


module.exports = function html() {
    return src([
      process.env.SRC_DIR+'/pages/**/*.html',
      '!'+process.env.SRC_DIR+'/pages/common/*.html',
      '!'+process.env.SRC_DIR+'/pages/include/*.html'])
    .pipe(fileinclude({
        prefix: '@',
        basepath: '@file'
      }))
    .pipe(dest(process.env.BUILD_DIR))
}