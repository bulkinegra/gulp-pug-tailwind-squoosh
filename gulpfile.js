const { series, task, parallel } = require('gulp');
const requireDir = require('require-dir');
require('gulp-env')({ file: '.env.json' }); // Записываем переменные окружения


//Импортирует дикт tasks со всеми таксами из папки gulp/tusks
const tasks = requireDir('./gulp/tasks') 
// Обьявляем все таски
task('html', tasks.html)
task('style', tasks.style)
task('script', tasks.script)
task('watching', tasks.watching)
task('rastr', tasks.rastr)
task('svg_sprite', tasks.svg_sprite)
task('ttf', tasks.ttf)
task('inline_source', tasks.inline_source)


task('resize_img', tasks.resize_img)
task('min_img', series('html', 'style', 'script'))

task('default', series('html', 'style', 'script', parallel('watching')))

task('build', series('html', 'style', 'script', 'ttf', 'inline_source'))