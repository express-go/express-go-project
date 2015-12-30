/**
 * Skeleton Command
 */

module.exports.Command = function( app, cli )
{

    return {
        'skeleton' :
        {
            'foo' :
            {
                'description' : "Skeleton Foo command",
                'callMethod'  : function(cb)
                {
                    cli.console("Foo method");
                    cb();
                }
            },

            'bar' :
            {
                'description' : "Skeleton Bar command",
                'callMethod'  : function(cb)
                {
                    cli.console("Bar method");
                    cb();
                }
            }

        },

        'skeletons' :
        {
            'description' : "All Skeleton command",
            'callMethod'  : function(cb)
            {
                cli.commands['skeleton']['foo'].callMethod(function()
                {
                    cli.commands['skeleton']['bar'].callMethod(function()
                    {
                        cb();

                    });

                });

            }

        }
    };

};
