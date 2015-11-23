var runSequence = require('run-sequence');

var clean       = require('gulp-rimraf');

module.exports = function( gulp )
{

    // Cache clean
    gulp.task('clean-cache', function( done )
    {
        return gulp.src([
                cache_path('assets')
            ], {read: false})
            .pipe(clean());
    });

    // Cache clean
    gulp.task('clean-build', function( done )
    {
        return gulp.src([
                public_path('/assets/build/')
            ], {read: false})
            .pipe(clean());
    });

    // Full task
    gulp.task('cleans', function(done)
    {
        runSequence(
            'clean-cache',
            'clean-build',
            function() {
                console.log('Cleans ready!');
                done();
            });
    });
};
