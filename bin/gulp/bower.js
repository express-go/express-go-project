var execSync    = require('sync-exec');
var runSequence = require('run-sequence');
var glob        = require('glob');

var autoprefixer= require('gulp-autoprefixer');
var bowerFiles  = require('main-bower-files');
var concat      = require('gulp-concat');
var minifyCSS   = require('gulp-minify-css');
var uglify      = require('gulp-uglify');


module.exports = function( gulp )
{
    // Bower-modules
    gulp.task('bower-modules', function( done )
    {
        glob(base_path('/app_modules/**/bower.json'), function (err, files)
        {
            if( !err )
            {
                console.log("Installing modules bower dependencies");
                files.forEach(function( bowerFile )
                {
                    var bowerJson = require( bowerFile );

                    if ( typeof bowerJson.dependencies === "object" )
                    {
                        console.log("[" + bowerFile + "]");
                        Object.keys(bowerJson.dependencies).forEach(function(key)
                        {
                            var value = bowerJson.dependencies[key];

                            console.log(key + "#" + value);

                            //var cmd = value && value != "*" ? key + "#" + value : key;
                            var cmd = key + "#" + value;

                            execSync('bower install ' + cmd);
                            gulp.src(bowerFiles({
                                    paths: {
                                        bowerDirectory : base_path('/./bower_components'),
                                        bowerJson      : bowerFile
                                    }
                                }))
                                .pipe( gulp.dest( cache_path('assets/bower') ) );

                        });
                    }
                });
            }

            done();
        });
    });

    // Bower-files
    gulp.task('bower-application', function()
    {
        return gulp.src(bowerFiles({
                paths: {
                    bowerDirectory : base_path('./bower_components'),
                    bowerJson      : base_path('./bower.json')
                }
            }))
            .pipe( gulp.dest( cache_path('assets/bower') ) );

    });

    // Bower fonts
    gulp.task('bower-fonts', function ()
    {
        return gulp.src([
                cache_path('assets/bower/*.eot'),
                cache_path('assets/bower/*.svg'),
                cache_path('assets/bower/*.ttf'),
                cache_path('assets/bower/*.woff'),
                cache_path('assets/bower/*.woff2')
            ])
            .pipe(gulp.dest( public_path('assets/fonts') ));
    });

    // Bower fonts
    gulp.task('bower-styles', function ()
    {
        return gulp.src(cache_path('assets/bower/*.css'))
            .pipe(concat('bower.src.css'))
            .pipe(gulp.dest( cache_path('assets/build/lib') ))
            .pipe(minifyCSS())
            .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9'))
            .pipe(concat('bower.min.css'))
            .pipe(gulp.dest( cache_path('assets/build/lib') ));
    });

    // Bower scripts
    gulp.task('bower-scripts', function ()
    {
        return gulp.src(cache_path('assets/bower/*.js'))
            .pipe(concat('bower.src.js'))
            .pipe(gulp.dest( cache_path('assets/build/lib') ))
            .pipe(uglify())
            .pipe(concat('bower.min.js'))
            .pipe(gulp.dest( cache_path('assets/build/lib') ));
    });

    // Full task
    gulp.task('bower', function(done)
    {
        runSequence(
            'bower-modules',
            'bower-application',
            'bower-fonts',
            'bower-styles',
            'bower-scripts',
            function() {
                console.log('Bower ready!');
                done();
            });
    });
};
