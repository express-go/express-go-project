/**
 * Default routes
 */

module.exports.router = function( app )
{
    app.get('/', 'front.welcome', function(req, res)
    {
        res.render('index', { title: 'Express1' });
    });

    app.get('/stream', 'test.stream', function(req, res)
    {
        res.render('tests/stream');
    });
};
