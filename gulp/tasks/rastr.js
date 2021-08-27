const {	src, dest } = require('gulp');
const path = require('path');
const gulpSquoosh = require("gulp-squoosh");


module.exports = function rastr() {
  return src(process.env.SRC_DIR+'/img/borders/*.png')
    .pipe(
		gulpSquoosh(({ width, height, size, filePath }) => ({
			...(path.extname(filePath) === ".png"
				? { 
					preprocessOptions: {
						resize: {},
						quant: {
							numColors: 20,
							dither: 0,
						}
					},
					encodeOptions: {
						oxipng: {} 
					}		
				}
				:{
					encodeOptions: {
						mozjpeg: {quality: 85},
						webp: {quality: 85},
					}	
				}) 
			}),
		)
    )
    .pipe(dest(process.env.BUILD_DIR+'/img'));
}