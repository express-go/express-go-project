var socket;

if (!location.origin)
    location.origin = location.protocol + "//" + location.host;

(function($)
{
    window.socket = socket = io.connect(location.origin,
    {
        /*'reconnection delay': 100, // defaults to 500
        'reconnection limit': 100, // defaults to Infinity
        'max reconnection attempts': Infinity, // defaults to 10*/
        'sync disconnect on unload': true,
        'reconnection': true,
        'reconnectionDelay': 500,
        'reconnectionDelayMax' : 1000,
        'reconnectionAttempts': Infinity,
        'timeout': 20000,
        transports: [
            'websocket',
            'flashsocket',
            'htmlfile',
            'xhr-polling',
            'jsonp-polling',
            'polling'
        ]
    });
    socket.on('news', function (data) {
        console.log(data);
        socket.emit('my other event', { my: 'data' });
    });
    socket.on('disconnect', function () {
        console.log('ws disconnect');
    });
    socket.on('connect_failed', function () {
        console.log('ws connect_failed');
    });

}(jQuery));