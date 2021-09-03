const browserSync = require('browser-sync').create()

module.exports = function bs() {

    return browserSync.init({
		
		logPrefix: 'BS-WATCH:',
		logLevel: 'info',
		logConnections: false,
		logFileChanges: true,
		open: false,
        notify: false,
		port: 3000,
		proxy: 'localhost:8000'
	});
	 
}