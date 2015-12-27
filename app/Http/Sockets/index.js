var cluster  = require( 'cluster' );

module.exports.socket = function ( socket )
{
    socket.emit('news', { hello: 'worker: ' + cluster.worker.id });
    socket.on('my other event', function (data)
    {
        console.log(data);
    });

};