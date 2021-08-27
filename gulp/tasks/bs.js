const browserSync = require('browser-sync').create()

module.exports = function bs() {

    return browserSync.init({
		server: {
			baseDir: process.env.BUILD_DIR
		},
		logPrefix: 'BS-WATCH:',
		logLevel: 'info',
		logConnections: false,
		logFileChanges: true,
		open: false,
        notify: false
	});
	 
}