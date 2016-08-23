var gulp = require('gulp'),
		pug = require('gulp-pug'),
		browserSync = require('browser-sync').create(),
		testData = require('./testData.js');

gulp.task('serve', ['js-compile', 'style-compile', 'template-compile'], function serve() {
	browserSync.init({
		server: './build'
	});

	gulp.watch('src/assets/*.css', ['style-compile']);
	gulp.watch('src/assets/*.js'), ['js-compile'];
	gulp.watch('src/*.pug', ['template-compile']).on('change', browserSync.reload);
});

gulp.task('template-compile', function pugCompile() {
	return gulp.src('src/pages/*.pug')
		.pipe(pug({
			locals: testData
		}))
		.pipe(gulp.dest('build/'))
	;
});

gulp.task('style-compile', function styleCompile() {
	return gulp.src('src/assets/styles/*.css')
		.pipe(gulp.dest('build/styles'))
	;
});

gulp.task('js-compile', function jsCompile() {
	return gulp.src('src/assets/js/*.js')
		.pipe(gulp.dest('build/js'))
	;
});
