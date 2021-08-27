const { src, dest } = require('gulp');
const ttf2woff2 = require('gulp-ttftowoff2');

module.exports = function ttf() {
	return src(process.env.SRC_DIR+'/fonts/**/*.ttf')
		.pipe(ttf2woff2())
		.pipe(dest(process.env.BUILD_DIR+'/fonts'))
}