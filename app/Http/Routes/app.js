/**
 * Default routes
 */

module.exports = function( app )
{
    app.get('/', 'front.welcome', function(req, res)
    {
        res.render('index', { title: 'Express1' });
    });

};
