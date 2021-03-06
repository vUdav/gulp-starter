/* Main watcher */
var gulp = require('gulp'),
		config = require('./config');

gulp.task('watch', ['webserver'],function() {
	gulp.watch(config.pathTo.Watch.Styles, ['less']);
	gulp.watch(config.pathTo.Watch.Pug, ['pug']);
	gulp.watch(config.pathTo.Watch.Images, ['img']);
	gulp.watch(config.pathTo.Watch.PngSprite, ['png-sprite']);
	gulp.watch(config.pathTo.Watch.SvgSprite, ['svg-sprite']);
	gulp.watch(config.pathTo.Watch.JS, ['js']);
	gulp.watch(config.pathTo.Watch.Fonts, ['fonts']);
	gulp.watch(config.pathTo.Watch.Favicon, ['favicon']);
});