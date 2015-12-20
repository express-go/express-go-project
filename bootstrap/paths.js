/**
 * Helpers
 */
global.fs = require('fs');

var pathHelper = function( parentPathFunction, relativePath, innerPath, getRelativePath )
{
    var returnPath;

    // Clear slashes
    var pathCleaner = function ( cleanPath )
    {
        if ( cleanPath.charAt(0) === "/" || cleanPath.charAt(0) === "\\" )
            cleanPath = cleanPath.substr(1);

        if ( cleanPath.charAt(cleanPath.length - 1) == "/" || cleanPath.charAt(cleanPath.length - 1) == "\\" )
            cleanPath = cleanPath.substr(0, cleanPath.length - 1);

        return cleanPath;
    };

    // Auto slash prefix
    var pathPrefixer = function( prefixPath )
    {
        if ( typeof prefixPath === 'string' )
        {
            if ( prefixPath.length > 0 )
            {
                prefixPath = pathCleaner( prefixPath );
            }

            prefixPath = '/' + prefixPath;
        }
        else
        {
            prefixPath = '';
        }

        return prefixPath;
    };

    // Pathes
    relativePath = pathPrefixer( relativePath );
    innerPath    = pathPrefixer( innerPath );
    returnPath   = relativePath + innerPath;

    // Non-slash relative path
    if ( !!getRelativePath || typeof parentPathFunction !== "function" )
    {
        return pathCleaner( returnPath );
    }

    // Non-slash absolute path
    return parentPathFunction( returnPath );
};

/**
 * Framework helpers
 */

// Base path
global.base_path = function ( innerPath, getRelative )
{
    return pathHelper( null, fs.realpathSync( __dirname + '/../' ), innerPath, getRelative );
};

// NPM path
global.npm_path = function ( innerPath, getRelative )
{
    return pathHelper( base_path, "node_modules", innerPath, getRelative );
};

// Bower path
global.bower_path = function ( innerPath, getRelative )
{
    return pathHelper( base_path, "bower_components", innerPath, getRelative );
};

/**
 * Storage helpers
 */

// Storage path
global.storage_path = function ( innerPath, getRelative )
{
    return pathHelper( base_path, "storage", innerPath, getRelative );
};

// Cache path
global.cache_path = function ( innerPath, getRelative )
{
    return pathHelper( storage_path, "cache", innerPath, getRelative );
};

// Logs path
global.logs_path = function ( innerPath, getRelative )
{
    return pathHelper( storage_path, "logs", innerPath, getRelative );
};

/**
 * Application helpers
 */

// Application path
global.app_path = function ( innerPath, getRelative )
{
    return pathHelper( base_path, "app", innerPath, getRelative );
};

// Modules path
global.app_modules = function ( innerPath, getRelative )
{
    return pathHelper( base_path, "app_modules", innerPath, getRelative );
};

// Models path
global.models_path = function ( innerPath, getRelative )
{
    return pathHelper( app_path, "Models", innerPath, getRelative );
};

// Views path
global.views_path = function ( innerPath, getRelative )
{
    return pathHelper( resources_path, "views", innerPath, getRelative );
};

// Public path
global.public_path = function ( innerPath, getRelative )
{
    return pathHelper( base_path, "public", innerPath, getRelative );
};

// Assets path
global.assets_path = function ( innerPath, getRelative )
{
    return pathHelper( resources_path, "assets", innerPath, getRelative );
};

// Language path
global.lang_path = function ( innerPath, getRelative )
{
    return pathHelper( lang_path, "lang", innerPath, getRelative );
};

// Controllers path
global.controllers_path = function ( innerPath, getRelative )
{
    return pathHelper( app_path, "Http/Controllers", innerPath, getRelative );
};

// Middlewares path
global.middlewares_path = function ( innerPath, getRelative )
{
    return pathHelper( app_path, "Http/Middlewares", innerPath, getRelative );
};

// Routes path
global.routes_path = function ( innerPath, getRelative )
{
    return pathHelper( app_path, "Http/routes", innerPath, getRelative );
};

// Sockets path
global.sockets_path = function ( innerPath, getRelative )
{
    return pathHelper( app_path, "Http/Sockets", innerPath, getRelative );
};

// Config path
global.config_path = function ( innerPath, getRelative )
{
    return pathHelper( base_path, "config", innerPath, getRelative );
};

// Resources path
global.resources_path = function ( innerPath, getRelative )
{
    return pathHelper( base_path, "resources", innerPath, getRelative );
};
