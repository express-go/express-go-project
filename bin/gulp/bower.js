var execSync    = require('sync-exec');
var runSequence = require('run-sequence');
var glob        = require('glob');
var fs          = require('fs');

var autoprefixer= require('gulp-autoprefixer');
var bowerFiles  = require('main-bower-files');
var concat      = require('gulp-concat');
var minifyCSS   = require('gulp-minify-css');
var uglify      = require('gulp-uglify');

// TODO
// Kell majd egy bower list, hogy mi települt
// Szét kell válasytani ay app-mod-admin bowereket
var bowerList = {};

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
                            var randNum = Math.floor(Math.random() * 10000);

                            //var cmd = value && value != "*" ? key + "#" + value : key;
                            var cmd = key + '=' + key + "#" + value + '';

                            console.log("bowerFile", cmd);

                            execSync('bower install ' + cmd);
                            gulp.src(require('main-bower-files')({
                                    paths: {
                                        bowerDirectory : bower_path(),
                                        bowerJson      : bowerFile
                                    }
                                }))
                                .pipe( gulp.dest( cache_path('assets/bower') ) );

                            /*var runGulp = function( randNum1 )
                            {
                                return gulp.src(require('main-bower-files')({
                                        paths: {
                                            bowerDirectory : bower_path(),
                                            bowerJson      : bowerFile
                                        }
                                    }))
                                    .pipe( gulp.dest( cache_path('assets/bower/mod_' + randNum1) ) );
                            };
                            runGulp( randNum );*/
                        });
                    }
                });
            }

            execSync('bower update');
            done();
        });
    });

    // Bower-files
    gulp.task('bower-application', function()
    {
        return gulp.src(bowerFiles({
                paths: {
                    bowerDirectory : bower_path(),
                    bowerJson      : base_path('./bower.json')
                }
            }))
            .pipe( gulp.dest( cache_path('assets/bower') ) );

    });

    // Bower fonts
    gulp.task('bower-fonts', function ()
    {
        return gulp.src([
                cache_path('assets/bower/**/*.eot'),
                cache_path('assets/bower/**/*.svg'),
                cache_path('assets/bower/**/*.ttf'),
                cache_path('assets/bower/**/*.woff'),
                cache_path('assets/bower/**/*.woff2')
            ])
            .pipe(gulp.dest( public_path('assets/fonts') ));
    });

    // Bower fonts
    gulp.task('bower-styles', function ()
    {
        gulp.src([
                bower_path('/bootstrap/dist/css/bootstrap.css')
            ])
            //.pipe(gulp.dest( cache_path('assets/bower') ));
            .pipe(gulp.dest( cache_path('assets/build/lib') ));


        return gulp.src(
            [
                cache_path('assets/bower/*.css')
            ]
        )
            //.pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9'))
            .pipe(concat('bower.src.css'))
            //.pipe(gulp.dest( cache_path('assets/build/lib') ))
            //.pipe(minifyCSS())
            //.pipe(concat('bower.min.css'))
            .pipe(gulp.dest( cache_path('assets/build/lib') ));
    });

    // Bower scripts
    gulp.task('bower-scripts', function ()
    {
        return gulp.src(cache_path('assets/bower/*.js'))
            .pipe(concat('bower.src.js'))
            //.pipe(gulp.dest( cache_path('assets/build/lib') ))
            //.pipe(uglify())
            //.pipe(concat('bower.min.js'))
            .pipe(gulp.dest( cache_path('assets/build/lib') ));
    });

    // Priorizing files
    gulp.task('bower-priors', function ()
    {
        fs.renameSync(cache_path('assets/bower/jquery.js'),    cache_path('assets/bower/aaa__1_jquery.js'));
        fs.renameSync(cache_path('assets/bower/bootstrap.js'), cache_path('assets/bower/aaa__2_bootstrap.js'));
    });

    // Full task
    gulp.task('bower', function(done)
    {
        runSequence(
            'bower-modules',
            'bower-application',
            'bower-priors',
            'bower-fonts',
            'bower-styles',
            'bower-scripts',
            function() {
                console.log('Bower ready!');
                done();
            });
    });
};