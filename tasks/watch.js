const gulp = require('gulp');
const config = require('../package').gulp;

const watch = () => {
  gulp.watch([`${config.src.scss}${config.selectors.scss}`], ['build-scss']);
  gulp.watch(`${config.src.js}${config.selectors.js}`, ['build-js']);
};

gulp.task('watch-all', watch);
module.exports = watch;


//gulp.watch(`${config.src.html}${config.selectors.html}`, ['build-mark-up']);
//gulp.watch(`${config.src.fonts}${config.selectors.fonts}`, ['build-fonts']);
//gulp.watch(`${config.src.js}${config.selectors.html}`, ['build-partials']);
//gulp.watch(`${config.srcDir}${config.main.index}`, ['build-index']);