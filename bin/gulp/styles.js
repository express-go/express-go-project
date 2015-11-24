var runSequence = require('run-sequence');

var concat      = require('gulp-concat');
var minifyCSS   = require('gulp-minify-css');
var autoprefixer= require('gulp-autoprefixer');
var less        = require('gulp-less');
var sass        = require('gulp-sass');


module.exports = function( gulp )
{
    // Compile Less
    gulp.task('styles-less', function()
    {
        return gulp.src( assets_path('less/**/*.less') )
            .pipe(less())
            .pipe(concat('app.less.src.css'))
            //.pipe(gulp.dest(cache_path('assets/build/app')))
            //.pipe(minifyCSS())
            //.pipe(concat('app.less.min.css'))
            .pipe(gulp.dest( cache_path('assets/build/app') ));
    });

    // Compile Sass
    gulp.task('styles-sass', function()
    {
        return gulp.src( assets_path('sass/**/*.scss') )
            .pipe(sass())
            .pipe(concat('app.sass.src.css'))
            //.pipe(gulp.dest(cache_path('assets/build/app')))
            //.pipe(minifyCSS())
            //.pipe(concat('app.sass.min.css'))
            .pipe(gulp.dest( cache_path('assets/build/app') ));
    });

    // Compile CSS
    gulp.task('styles-css', function()
    {
        return gulp.src( assets_path('css/**/*.css') )
            .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9'))
            .pipe(concat('app.css.src.css'))
            //.pipe(gulp.dest(cache_path('assets/build/app')))
            //.pipe(minifyCSS())
            //.pipe(concat('app.css.min.css'))
            .pipe(gulp.dest( cache_path('assets/build/app') ));
    });

    // Full task
    gulp.task('styles', function(done)
    {
        runSequence(
            'styles-less',
            'styles-sass',
            'styles-css',
            function() {
                console.log('Styles ready!');
                done();
            });
    });
};
