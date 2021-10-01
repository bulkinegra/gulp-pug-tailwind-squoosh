const { watch, parallel, series } = require('gulp')
const bs = require('browser-sync').create();

module.exports = function watching() {

    bs.init({
        server :{
            baseDir: process.env.BUILD_DIR
        },
		logPrefix: 'BS-WATCH:',
		logLevel: 'info',
		logConnections: false,
		logFileChanges: true,
		open: false,
        notify: false,
	});

    watch(process.env.SRC_DIR+'/pages/**/*.html', series('html'));
    watch(process.env.SRC_DIR+'/styles/**/*.css', series('style'));
    watch('tailwind.config.js', series('style'));
    watch(process.env.SRC_DIR+'/js/**/*.js', series('script'));

    watch(process.env.BUILD_DIR+'/**/*.html').on('change', bs.reload);
    watch(process.env.SRC_DIR+'/**/*.css').on('change', bs.reload);
    watch(process.env.BUILD_DIR+'/*.js').on('change', bs.reload);

}