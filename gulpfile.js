require('./bootstrap/paths');

var runSequence = require('run-sequence');
var gulp        = require('gulp');
var concat      = require('gulp-concat');

require('./bin/gulp/cleans')( gulp );
require('./bin/gulp/bower')( gulp );
require('./bin/gulp/fonts')( gulp );
require('./bin/gulp/styles')( gulp );
require('./bin/gulp/scripts')( gulp );
require('./bin/gulp/version')( gulp );

// Socket.io
gulp.task('socket-io', function()
{
    return gulp.src( base_path("node_modules/**/socket.io-client/socket.io.js") )
        .pipe(concat('socket.io.js'))
        .pipe(gulp.dest( cache_path('assets/build/lib/') ));
});

// Default Task
gulp.task('default', function(done)
{
    runSequence(
        'cleans',
        'socket-io',
        'bower',
        'fonts',
        'styles',
        'scripts',
        'version',
        function() {
            console.log('Gulp ready!');
            done();
        }
    );
});
