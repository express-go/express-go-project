require('./bootstrap/paths');

var runSequence = require('run-sequence');
var gulp = require('express-go-gulp')();


// Default Task
gulp.task('default', function(done)
{
    runSequence(
        'cleans',
        'socket',
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
