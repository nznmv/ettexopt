const gulp = require('gulp');
const distDir = './.dist/';
const destDir = '../public/';
gulp.task('release', () => {
	return gulp.src(distDir+'**/*')
			.pipe(gulp.dest(destDir));
});