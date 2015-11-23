var runSequence = require('run-sequence');

var concat      = require('gulp-concat');
var fontmin     = require('gulp-fontmin');
var minifyCSS   = require('gulp-minify-css');

module.exports = function( gulp )
{
    // Fonts converter, ttf 2 webfonts
    gulp.task('fonts-convert', function ()
    {
        return gulp.src( assets_path('fonts/**/*.ttf') )
            .pipe(fontmin({
                fontPath : '../fonts/'
            }))
            .pipe(gulp.dest( cache_path('assets/fonts') ));
    });

    // Fonts files copy
    gulp.task('fonts-files', function ()
    {
        return gulp.src( [
                cache_path('assets/fonts/**/*.ttf'),
                cache_path('assets/fonts/**/*.eot'),
                cache_path('assets/fonts/**/*.svg'),
                cache_path('assets/fonts/**/*.woff'),
                cache_path('assets/fonts/**/*.woff2')
            ] )
            .pipe(gulp.dest( public_path('assets/fonts') ));
    });

    // Fonts styles concat
    gulp.task('fonts-styles', function ()
    {
        return gulp.src( cache_path('assets/fonts/**/*.css') )
            .pipe(concat('app.fonts.src.css'))
            .pipe(gulp.dest( cache_path('assets/build/app') ))
            .pipe(minifyCSS())
            .pipe(concat('app.fonts.min.css'))
            .pipe(gulp.dest( cache_path('assets/build/app') ));
    });

    // Full task
    gulp.task('fonts', function(done)
    {
        runSequence(
            'fonts-convert',
            'fonts-files',
            'fonts-styles',
            function() {
                console.log('Fonts ready!');
                done();
            });
    });
};
