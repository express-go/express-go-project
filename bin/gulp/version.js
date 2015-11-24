var runSequence = require('run-sequence');

var concat      = require('gulp-concat');
var rev         = require('gulp-rev');
var autoprefixer= require('gulp-autoprefixer');
var minifyCSS   = require('gulp-minify-css');
var uglify      = require('gulp-uglify');

module.exports = function( gulp )
{
    // Compile lib files
    gulp.task('build-lib-scripts', function( next )
    {
        return gulp
            .src( cache_path('assets/build/lib/*.js') )
            .pipe(concat('lib.js'))
            .pipe(gulp.dest( cache_path('assets/build') ))
            .pipe(uglify())
            .pipe(concat('lib.min.js'))
            .pipe(gulp.dest( cache_path('assets/build') ));

    });

    // Compile lib files
    gulp.task('build-lib-min-scripts', function( next )
    {
        return gulp
            .src( cache_path('assets/build/lib/*.min.js') )
            .pipe(concat('lib.min.js'))
            .pipe(gulp.dest( cache_path('assets/build') ));

    });

    // Compile lib files
    gulp.task('build-lib-styles', function( next )
    {
        return gulp
            .src( cache_path('assets/build/lib/*.css') )
            .pipe(concat('lib.css'))
            .pipe(gulp.dest( cache_path('assets/build') ))
            .pipe(minifyCSS())
            .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9'))
            .pipe(concat('lib.min.css'))
            .pipe(gulp.dest( cache_path('assets/build') ));

    });

    // Compile lib files
    gulp.task('build-lib-min-styles', function( next )
    {
        return gulp
            .src( cache_path('assets/build/lib/*.min.css') )
            .pipe(concat('lib.min.css'))
            .pipe(gulp.dest( cache_path('assets/build') ));

    });

    // Compile app files
    gulp.task('build-app-scripts', function( next )
    {
        return gulp
            .src( cache_path('assets/build/app/*.src.js') )
            .pipe(concat('app.js'))
            .pipe(gulp.dest( cache_path('assets/build') ))
            .pipe(uglify())
            .pipe(concat('app.min.js'))
            .pipe(gulp.dest( cache_path('assets/build') ));

    });

    // Compile app files
    gulp.task('build-app-min-scripts', function( next )
    {
        return gulp
            .src( cache_path('assets/build/app/*.min.js') )
            .pipe(concat('app.min.js'))
            .pipe(gulp.dest( cache_path('assets/build') ));

    });

    // Compile app files
    gulp.task('build-app-styles', function( next )
    {
        return gulp
            .src( cache_path('assets/build/app/*.css') )
            .pipe(concat('app.css'))
            .pipe(gulp.dest( cache_path('assets/build') ))
            .pipe(minifyCSS())
            .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9'))
            .pipe(concat('app.min.css'))
            .pipe(gulp.dest( cache_path('assets/build') ));

    });

    // Compile app files
    gulp.task('build-app-min-styles', function( next )
    {
        return gulp
            .src( cache_path('assets/build/app/*.min.css') )
            .pipe(concat('app.min.css'))
            .pipe(gulp.dest( cache_path('assets/build') ));

    });

    // Build versioning
    gulp.task('build-version', function ()
    {
        return gulp.src([
                cache_path('/assets/build/*.css'),
                cache_path('/assets/build/*.js')
            ])
            .pipe(rev())
            .pipe(gulp.dest( public_path('/assets/build/') ))  // write rev'd assets to build dir
            .pipe(rev.manifest())
            .pipe(gulp.dest( public_path('/assets/build/') )); // write manifest to build dir
    });

    // Full task
    gulp.task('version', function(done)
    {
        runSequence(
            'build-lib-scripts',
            'build-lib-styles',
            //'build-lib-min-scripts',
            //'build-lib-min-styles',
            'build-app-scripts',
            'build-app-styles',
            //'build-app-min-scripts',
            //'build-app-min-styles',
            'build-version',
            function() {
                console.log('Versions ready!');
                done();
            });
    });
};
