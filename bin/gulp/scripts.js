var runSequence = require('run-sequence');

var concat      = require('gulp-concat');
var jshint      = require('gulp-jshint');
var ts          = require('gulp-tsc');
var uglify      = require('gulp-uglify');


module.exports = function( gulp )
{
    // Compile TypeScripts
    gulp.task('scripts-compile-ts', function()
    {
        return gulp.src( assets_path('ts/**/*.ts') )
            .pipe(ts())
            .pipe(gulp.dest( cache_path('assets/typescripts') ));
    });

    // Compile TypeScript build files
    gulp.task('scripts-ts', function()
    {
        return gulp.src( cache_path('assets/typescripts/**/*.js') )
            .pipe(concat('app.typescript.src.js'))
            .pipe(gulp.dest( cache_path('assets/build/app') ))
            .pipe(uglify())
            .pipe(concat('app.typescript.min.js'))
            .pipe(gulp.dest( cache_path('assets/build/app') ));
    });

    // Compile Scripts
    gulp.task('scripts-js', function()
    {
        return gulp.src( assets_path('js/**/*.js') )
            .pipe(concat('app.js.src.js'))
            .pipe(gulp.dest( cache_path('assets/build/app') ))
            .pipe(uglify())
            .pipe(concat('app.js.min.js'))
            .pipe(gulp.dest( cache_path('assets/build/app') ));
    });

    // Lint Task
    gulp.task('scripts-js-lint', function()
    {
        return gulp.src( assets_path('js/**/*.js') )
            .pipe(jshint())
            .pipe(jshint.reporter('default'));
    });

    // Lint Task
    gulp.task('scripts-ts-lint', function()
    {
        return gulp.src( cache_path('assets/typescripts/**/*.js') )
            .pipe(jshint())
            .pipe(jshint.reporter('default'));
    });

    // Full task
    gulp.task('scripts', function(done)
    {
        runSequence(
            'scripts-compile-ts',
            'scripts-ts-lint',
            'scripts-js-lint',
            'scripts-ts',
            'scripts-js',
            function() {
                console.log('Scripts ready!');
                done();
            });
    });
};
