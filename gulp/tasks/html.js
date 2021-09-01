const { src, dest } = require('gulp');
const fileinclude = require('gulp-file-include');


module.exports = function html() {
    return src(process.env.SRC_DIR+'/pages/*.html')
    .pipe(fileinclude({
        prefix: '@',
        basepath: '@file'
      }))
    .pipe(dest(process.env.BUILD_DIR))
}