var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var minifyCss = require('gulp-minify-css');
var rename = require("gulp-rename");

gulp.task('sass', function () {
	return sass('proof-of-concept/gsites-proof-of-concept.scss')
	.pipe(gulp.dest('proof-of-concept'))
	.pipe(rename({suffix: '.min'}))
	.pipe(minifyCss())
	.pipe(gulp.dest('proof-of-concept'))
});

gulp.task('default', function() {
	console.log('Gulp!')
});