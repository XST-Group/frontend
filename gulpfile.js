var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var sass = require('gulp-sass');
var cleancss = require('gulp-clean-css');
var uglify  = require('gulp-uglify');
var rename = require('gulp-rename');
var concat  = require('gulp-concat');
var clean = require('gulp-clean');
var browserSync = require('browser-sync');
var sequence = require('gulp-sequence');

gulp.task('clean', function() {
    gulp.src(['./dist/css', './dist/js', './dist/images', './dist/fonts','./dist/player'], {read: false})
        .pipe(clean());
});

gulp.task('html', function() {
    gulp.src('./src/*.html')
        .pipe(gulp.dest('./dist/'))
});

gulp.task('css', function () {
  	gulp.src('./src/scss/*.scss')
    	.pipe(sass.sync().on('error', sass.logError))
    	.pipe(gulp.dest('./css'))
        .pipe(cleancss())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('./css'))
        .pipe(gulp.dest('./dist/css'));
});

gulp.task('img', function(){
    gulp.src('./src/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'));
})

gulp.task('fonts', function () {
	gulp.src('./src/fonts/*')
		.pipe(gulp.dest('./dist/fonts'))
});

gulp.task('player', function () {
    gulp.src('./src/player/*')
        .pipe(gulp.dest('./dist/player'))
});

gulp.task('js', function () {
    gulp.src('./src/js/*.js')
        .pipe(concat('main.js'))
        .pipe(gulp.dest('./dist/js'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'));
});

gulp.task('browser-sync', function () {
   var files = [
      './dist/css/*.css',
      './dist/fonts/*',
      './dist/js/*.js',
      './dist/player/*',
      './dist/*.html'
   ];
   browserSync.init(files, {
      server: {
         baseDir: './dist'
      }
   });
   gulp.watch("src/*.html", ['html']);
   gulp.watch('src/scss/**/*.scss', ['css']);
   gulp.watch('src/images/**/*', ['img']);
   gulp.watch('src/fonts/*', ['fonts']);
   gulp.watch('src/player/*', ['player']);
   gulp.watch('src/js/*.js', ['js']);
});

gulp.task( 'default', sequence('clean',['html','css','img','js', 'fonts', 'player'],'browser-sync') );
