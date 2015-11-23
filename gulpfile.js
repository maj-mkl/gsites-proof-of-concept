var gulp = require('gulp');
var sass = require('gulp-ruby-sass');

gulp.task('sass', function () {
	return sass('proof-of-concept/gsites-proof-of-concept.scss')
	.pipe(gulp.dest('proof-of-concept'));
});

gulp.task('default', function() {
	console.log('Gulp!');
});