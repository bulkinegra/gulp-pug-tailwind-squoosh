const { src, dest } = require('gulp');
var extender = require('gulp-html-extend')


module.exports = function html() {
    return src([
      process.env.SRC_DIR+'/pages/**/*.html',
      '!'+process.env.SRC_DIR+'/pages/common/*.html',
      '!'+process.env.SRC_DIR+'/pages/include/*.html'])
    .pipe(extender({annotations:true,verbose:false, root:'src/pages'}))
    .pipe(dest(process.env.BUILD_DIR))
}