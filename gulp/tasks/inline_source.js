const {	src, dest } = require('gulp');
const inlinesource = require('gulp-inline-source');
const htmlmin = require('gulp-htmlmin');
 
module.exports = function inline_source() {
    var source = src(process.env.BUILD_DIR+'/**/*.html')
    
    if(process.env.DEV == 'False'){

        source.pipe(htmlmin({
            collapseWhitespace: true,
            removeComments: true
        }))
    } else {
        console.log('Dev - min_html are getting through')
    }

    source.pipe(inlinesource())
    .pipe(dest(process.env.DIST_DIR));
    return source;

    
};