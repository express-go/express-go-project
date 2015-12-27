var fs   = require("fs");
var path = require("path");

module.exports.stream = function ( socket )
{
    socket.on('file-upload', function ( stream, data )
    {
        /**
         * data.name
         * data.type
         * data.size
         * data.date
         */
        var filename = path.basename(data.name);
        stream.pipe(
            fs.createWriteStream( storage_path( filename ) )
        );
    });
};