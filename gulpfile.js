'use strict';

/**
 * Gulp file for assets
 *
 * Steps:
 * 1. fonts* ( only ttf files, run with manual calling, watch mode or full mode )
 * 2. bower styles and fonts
 * 2. less
 * 3. sass
 * 4. css
 * 5. concat
 * 6. ts
 * 7. js
 * 8. concat
 * 9. version
 */

// https://travismaynard.com/writing/getting-started-with-gulp
// http://www.smashingmagazine.com/2014/06/building-with-gulp/
// https://github.com/postcss/gulp-postcss

// Include gulp
require('./bootstrap/paths');
var fs = require('fs');
var runSequence = require('run-sequence');

// Include Our Plugins
var gulp        = require('gulp');
var autoprefixer= require('gulp-autoprefixer');
var clean       = require('gulp-rimraf');
var concat      = require('gulp-concat');
var jshint      = require('gulp-jshint');
var less        = require('gulp-less');
var minifyCSS   = require('gulp-minify-css');
var rename      = require('gulp-rename');
var rev         = require('gulp-rev');
var sass        = require('gulp-sass');
var uglify      = require('gulp-uglify');
var ts          = require('gulp-tsc');
var fontmin     = require('gulp-fontmin');

/**
 * Styles and fonts
 */

// Bower fonts components
gulp.task('bower-fonts', function ()
{
    return gulp.src([
        base_path('bower_components/bootstrap/fonts/*.*'),
        base_path('bower_components/components-font-awesome/fonts/*.*')
    ])
        .pipe(gulp.dest( public_path('assets/fonts') ));
});

// Bower styles components
gulp.task('bower-styles', function ()
{
    return gulp.src([
        base_path('bower_components/bootstrap/dist/css/bootstrap.min.css'),
        base_path('bower_components/components-font-awesome/css/font-awesome.min.css')
    ])
        .pipe(concat('lib.css'))
        .pipe(gulp.dest( cache_path('assets') ))
        .pipe(minifyCSS())
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9'))
        .pipe(concat('lib.min.css'))
        .pipe(gulp.dest( cache_path('assets') ));
});

// Fonts styles concat
gulp.task('fonts-styles', function ()
{
    return gulp.src( public_path('assets/fonts/**/*.css') )
        .pipe(concat('app.fonts.css'))
        .pipe(minifyCSS())
        .pipe(concat('app.fonts.min.css'))
        .pipe(gulp.dest( cache_path('assets') ));
});

// Fonts converter, ttf 2 webfonts
gulp.task('fonts-convert', function ()
{
    return gulp.src( assets_path('fonts/**/*.ttf') )
        .pipe(fontmin())
        .pipe(gulp.dest( public_path('assets/fonts') ));
});

// Compile Less
gulp.task('less', function()
{
    return gulp.src( assets_path('less/**/*.less') )
        .pipe(less())
        .pipe(concat('app.less.css'))
        .pipe(minifyCSS())
        .pipe(concat('app.less.min.css'))
        .pipe(gulp.dest( cache_path('assets') ));
});

// Compile Sass
gulp.task('sass', function()
{
    return gulp.src( assets_path('sass/**/*.scss') )
        .pipe(concat('app.sass.css'))
        .pipe(sass())
        .pipe(minifyCSS())
        .pipe(concat('app.sass.min.css'))
        .pipe(gulp.dest( cache_path('assets') ));
});

// Compile CSS
gulp.task('css', function()
{
    return gulp.src( assets_path('css/**/*.css') )
        .pipe(concat('app.css.css'))
        .pipe(gulp.dest( cache_path('assets') ))
        .pipe(minifyCSS())
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9'))
        .pipe(concat('app.css.min.css'))
        .pipe(gulp.dest( cache_path('assets') ));
});

// Concatenate & Minify for development
gulp.task('styles-development', function()
{
    return gulp.src( cache_path('assets/app.*.css') )
        .pipe(concat('app.css'))
        .pipe(gulp.dest( cache_path('assets') ));
});

// Concatenate & Minify for production
gulp.task('styles-production', function()
{
    return gulp.src( cache_path('assets/app.*.min.css') )
        .pipe(concat('app.min.css'))
        .pipe(gulp.dest( cache_path('assets') ));
});

/**
 * SCRIPTS
 */

// Bower script components
gulp.task('bower-scripts', function ()
{
    return gulp.src([
            base_path('node_modules/socket.io/node_modules/socket.io-client/socket.io.js'),
            base_path('bower_components/jquery/dist/jquery.min.js'),
            base_path('bower_components/jquery-pjax/jquery.pjax.js'),
            base_path('bower_components/bootstrap/dist/js/bootstrap.min.js')
        ])
        .pipe(concat('lib.js'))
        .pipe(gulp.dest( cache_path('assets') ))
        .pipe(rename('lib.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest( cache_path('assets') ));
});

// Lint Task
gulp.task('scripts-lint', function()
{
    return gulp.src( assets_path('js/**/*.js') )
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// Typescript compiler
gulp.task('typescript-compile', function ()
{
    return gulp.src( assets_path('ts/**/*.ts') )
        .pipe(ts())
        .pipe(gulp.dest( cache_path('assets/ts') ));
});

// Convert typescript
gulp.task('typescript', ['typescript-compile'],function ()
{
    return gulp.src( cache_path('assets/ts/**/*.js') )
        .pipe(concat('app.typescript.js'))
        .pipe(gulp.dest( cache_path('assets') ))
        .pipe(uglify())
        .pipe(concat('app.typescript.min.js'))
        .pipe(gulp.dest( cache_path('assets') ));
});

// Convert js
gulp.task('scripts-js', function()
{
    return gulp.src( assets_path('js/**/*.js') )
        .pipe(concat('app.js.js'))
        .pipe(gulp.dest( cache_path('assets') ))
        .pipe(rename('app.js.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest( cache_path('assets') ));
});

// Concatenate & Minify for development
gulp.task('scripts-development', function()
{
    return gulp.src( cache_path('assets/app.*.js') )
        .pipe(concat('app.js'))
        .pipe(gulp.dest( cache_path('assets') ));
});

// Concatenate & Minify for production
gulp.task('scripts-production', function()
{
    return gulp.src( cache_path('assets/app.*.min.js') )
        .pipe(concat('app.min.js'))
        .pipe(gulp.dest( cache_path('assets') ));
});

/**
 * Cache
 */

// Clear temp files
gulp.task('clear-cache', function () {
    return gulp.src([cache_path('assets/*')], {read: false})
        .pipe(clean());
});

// Clear fonts temp files
gulp.task('clear-cache-fonts', function () {
    return gulp.src([public_path('assets/fonts/*')], {read: false})
        .pipe(clean());
});

// Clear css temp files
gulp.task('clear-cache-styles', function () {
    return gulp.src([cache_path('assets/**/*.css')], {read: false})
        .pipe(clean());
});

// Clear js temp files
gulp.task('clear-cache-scripts', function () {
    return gulp.src([cache_path('assets/**/*.js')], {read: false})
        .pipe(clean());
});

// Clear versioning files
gulp.task('clear-version', function () {
    return gulp.src( public_path('assets/build/*.*'), {read: false})
        .pipe(clean());
});

// Versioning files
gulp.task('version', function ()
{
    return gulp.src([
            cache_path('/assets/*.min.css'),
            cache_path('/assets/*.min.js')
        ])
        .pipe(rev())
        .pipe(gulp.dest( public_path('/assets/build/') ))  // write rev'd assets to build dir
        .pipe(rev.manifest())
        .pipe(gulp.dest( public_path('/assets/build/') )); // write manifest to build dir
});

// Bower Task
gulp.task('bower', function(done) {
    runSequence(
        'bower-styles',
        'bower-fonts',
        'bower-scripts',
        function() {
            console.log('Styles ready!');
            done();
        }
    );
});

// Fonts Task
gulp.task('fonts', function(done) {
    runSequence(
        'fonts-convert',
        'fonts-styles',
        'styles',
        function() {
            console.log('Styles ready!');
            done();
        }
    );
});

// Styles Task
gulp.task('styles', function(done) {
    runSequence(
        'bower-fonts',
        'bower-styles',
        'less',
        'sass',
        'css',
        'styles-development',
        'styles-production',
        function() {
            console.log('Styles ready!');
            done();
        }
    );
});

// Scripts task
gulp.task('scripts', function(done) {
    runSequence(
        'bower-scripts',
        'scripts-lint',
        'typescript',
        'scripts-js',
        'scripts-development',
        'scripts-production',
        function() {
            console.log('Styles ready!');
            done();
        }
    );
});

// Default fast Task
gulp.task('default', function(done)
{
    runSequence(
        'clear-cache',
        'styles',
        'scripts',
        'clear-version',
        'version',
        function() {
            console.log('Gulp ready!');
            done();
        });
});

// Full task
gulp.task('full', function(done)
{
    runSequence(
        'clear-cache',
        'fonts',
        'styles',
        'scripts',
        'clear-version',
        'version',
        function() {
            console.log('Gulp ready!');
            done();
        });
});


// Watch task
gulp.task('watch-styles', function(done)
{
    runSequence(
        'styles',
        'version',
        function() {
            done();
        });
});

gulp.task('watch-scripts', function(done)
{
    runSequence(
        'scripts',
        'version',
        function() {
            done();
        });
});

gulp.task('watch-fonts', function(done)
{
    runSequence(
        'fonts',
        'version',
        function() {
            done();
        });
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch( assets_path('js/*.js'),     ['watch-scripts']);
    gulp.watch( assets_path('ts/*.ts'),     ['watch-scripts']);
    gulp.watch( assets_path('scss/*.scss'), ['watch-styles']);
    gulp.watch( assets_path('less/*.less'), ['watch-styles']);
    gulp.watch( assets_path('css/*.css'),   ['watch-styles']);
    gulp.watch( assets_path('fonts/*.ttf'), ['watch-fonts']);
});
