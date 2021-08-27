const { src, dest } = require('gulp');
const babel = require('gulp-babel');
let uglify = require('gulp-uglify-es').default;

module.exports = function script(cb) {
    return src(process.env.SRC_DIR+'/js/*.js')
    .pipe(babel({
        presets: ['@babel/env']
    }))
    .pipe(uglify())
    .pipe(dest(process.env.BUILD_DIR));
}