var cluster  = require( 'cluster' );
var socketStream = require('socket.io-stream');

module.exports.stream = function ( io )
{
    // io stuff here... io.on('conection.....
    io.on('connection', function (socket)
    {
        socket.emit('news', { hello: 'worker: ' + cluster.worker.id });
        socket.on('my other event', function (data)
        {
            console.log(data);
        });
    });

};