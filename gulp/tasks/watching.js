const { watch, parallel, series } = require('gulp')
const bs = require('browser-sync').create();

module.exports = function watching() {

    bs.init({
		logPrefix: 'BS-WATCH:',
		logLevel: 'info',
		logConnections: false,
		logFileChanges: true,
		open: false,
        notify: false,
		proxy: 'localhost:8000'
	});

    watch(process.env.SRC_DIR+'/pages/**/*.html', series('html', 'inline_source'));
    watch(process.env.SRC_DIR+'/styles/**/*.css', series('style', 'inline_source'));
    watch('tailwind.config.js', series('style', 'inline_source'));
    watch(process.env.SRC_DIR+'/js/**/*.js', series('script', 'inline_source'));

    watch(process.env.DJANGO_FRONT_DIR+'/**/*.html').on('change', bs.reload);
    watch(process.env.DJANGO_FRONT_DIR+'/*.css').on('change', bs.reload);
    watch(process.env.DJANGO_FRONT_DIR+'/*.js').on('change', bs.reload);

}