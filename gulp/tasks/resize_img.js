const {	src, dest } = require('gulp');
const responsive = require('gulp-responsive')
 
module.exports = function resize_img() {
  return src(process.env.SRC_DIR+'/raw_img/dark/borders/*.png')
    .pipe(
      responsive({
        '*.png': [
          {
            width: 640,
            rename:{suffix: '-640-dark'}
          },{
            width: 768,
            rename:{suffix: '-768-dark'}
          },{
            width: 1024,
            rename:{suffix: '-1024-dark'}
          },{
            width: 1280,
            rename:{suffix: '-1280-dark'}
          },{
            width: 1536,
            rename:{suffix: '-1536-dark'}
          },
        ]
      })
    )
    .pipe(dest(process.env.BUILD_DIR+'/img/borders'))
}