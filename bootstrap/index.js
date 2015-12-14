/**
 * Bootstrap application
 */
require('dotenv').load();

process.env.NODE_ENV   = process.env.APP_ENV    || process.env.NODE_ENV;
process.env.DEBUG      = process.env.APP_DEBUG  || process.env.DEBUG;
process.env.DEBUG      = process.env.NODE_ENV   == 'production' ? false : process.env.DEBUG;
process.env.WORKERS    = process.env.WORKERS    || require('os').cpus().length;
//process.env.PORT_HTTP  = process.env.PORT_HTTP  || 80;
//process.env.PORT_HTTPS = process.env.PORT_HTTPS || 443;

if ( process.env.DEBUG )
    require('look').start();

require('./paths');
require('typescript-require')({
    tmpDir  : cache_path(),
    tempDir : cache_path()
});

module.exports = function()
{

};