var gulp=require('gulp');
var concat=require('gulp-concat');
var rename=require('gulp-rename');
var uglify=require('gulp-uglify');
var notify=require('gulp-notify');

gulp.task('js',function(){
	return gulp.src('index.js')
		.pipe(concat('laoUtils.js'))
		.pipe(gulp.dest('dist'))
		.pipe(rename({suffix:'.min'}))
		.pipe(uglify())
		.pipe(gulp.dest('dist'))
		.pipe(notify({message:'js task ok!'}));
});

gulp.task('default',function(){

	gulp.run('js');
	gulp.watch('index.js',function(){
		gulp.run('js');
	});
});