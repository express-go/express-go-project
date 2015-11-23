/* UNDER_CONSTRUCTION */

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
gulp.task('watch', function()
{
    gulp.watch( assets_path('js/*.js'),     ['watch-scripts']);
    gulp.watch( assets_path('ts/*.ts'),     ['watch-scripts']);
    gulp.watch( assets_path('scss/*.scss'), ['watch-styles']);
    gulp.watch( assets_path('less/*.less'), ['watch-styles']);
    gulp.watch( assets_path('css/*.css'),   ['watch-styles']);
    gulp.watch( assets_path('fonts/*.ttf'), ['watch-fonts']);
});

