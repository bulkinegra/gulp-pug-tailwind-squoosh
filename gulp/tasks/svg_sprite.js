const { src, dest } = require('gulp');
const svgmin = require('gulp-svgmin');
const replace = require('gulp-svgmin');
const cheerio = require('gulp-cheerio');

const log = require('fancy-log');
module.exports = function svg_sprite() {
	return src(process.env.SRC_DIR+'/svg/**')
	.pipe(svgmin({
		js2svg: {
		  pretty: true
		}
	}))
	.pipe(cheerio({
		run: function ($) {
			$('[fill]').removeAttr('fill');
			$('[stroke]').removeAttr('stroke');
			$('[style]').removeAttr('style');
		},
		parserOptions: {xmlMode: true}
	}))
	.pipe(replace('&gt;', '>'))
	// .pipe(sprite({
	// 	mode: {
	// 		symbol: {
	// 			sprite: "../sprite.svg"
	// 		}
	// 	}
	// }))
	
	.pipe(dest(process.env.BUILD_DIR+'/svg'));
}