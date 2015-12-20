/**
 * Helpers
 */
global.fs = require('fs');

/**
 * Framework helpers
 */

// Base path
global.base_path = function (innerPath) {
    innerPath = typeof innerPath === 'string' ? innerPath : '';
    return fs.realpathSync(__dirname + '/../') + '/' + innerPath;
};

// NPM path
global.npm_path = function (innerPath) {
    innerPath = typeof innerPath === 'string' ? innerPath : '';
    return base_path('node_modules/' + innerPath);
};

// Bower path
global.bower_path = function (innerPath) {
    innerPath = typeof innerPath === 'string' ? innerPath : '';
    return base_path('bower_components/' + innerPath);
};

/**
 * Storage helpers
 */

// Storage path
global.storage_path = function (innerPath, getRelative) {
    innerPath = typeof innerPath === 'string' ? innerPath : '';
    if (!!getRelative)
        return 'storage';
    return base_path('storage/' + innerPath);
};

// Cache path
global.cache_path = function (innerPath, getRelative) {
    innerPath = typeof innerPath === 'string' ? innerPath : '';
    if (!!getRelative)
        return 'cache';
    return storage_path('cache/' + innerPath);
};

// Logs path
global.logs_path = function (innerPath, getRelative) {
    innerPath = typeof innerPath === 'string' ? innerPath : '';
    if (!!getRelative)
        return 'logs';
    return storage_path('logs/' + innerPath);
};

/**
 * Application helpers
 */

// Application path
global.app_path = function (innerPath, getRelative) {
    innerPath = typeof innerPath === 'string' ? innerPath : '';
    if (!!getRelative)
        return 'app';
    return base_path('app/' + innerPath);
};
// Modules path
global.app_modules = function (innerPath, getRelative) {
    innerPath = typeof innerPath === 'string' ? innerPath : '';
    if (!!getRelative)
        return 'app_modules';
    return base_path('app_modules/' + innerPath);
};

// Models path
global.models_path = function (innerPath, getRelative) {
    innerPath = typeof innerPath === 'string' ? innerPath : '';
    if (!!getRelative)
        return 'Models';
    return app_path('Models/' + innerPath);
};

// Views path
global.views_path = function (innerPath, getRelative) {
    innerPath = typeof innerPath === 'string' ? innerPath : '';
    if (!!getRelative)
        return 'views';
    return resources_path('views/' + innerPath);
};

// Public path
global.public_path = function (innerPath, getRelative) {
    innerPath = typeof innerPath === 'string' ? innerPath : '';
    if (!!getRelative)
        return 'public';
    return base_path('public/' + innerPath);
};

// Assets path
global.assets_path = function (innerPath, getRelative) {
    innerPath = typeof innerPath === 'string' ? innerPath : '';
    if (!!getRelative)
        return resources_path('assets', true);
    return resources_path('assets/' + innerPath);
};

// Language path
global.lang_path = function (innerPath, getRelative) {
    innerPath = typeof innerPath === 'string' ? innerPath : '';
    return resources_path('lang/' + innerPath);
};

// Controllers path
global.controllers_path = function (innerPath, getRelative) {
    innerPath = typeof innerPath === 'string' ? innerPath : '';
    if (!!getRelative)
        return 'Http/Controllers';
    return app_path('Http/Controllers/' + innerPath);
};

// Middlewares path
global.middlewares_path = function (innerPath, getRelative) {
    innerPath = typeof innerPath === 'string' ? innerPath : '';
    if (!!getRelative)
        return 'Http/Middlewares';
    return app_path('Http/Middlewares/' + innerPath);
};

// Routes path
global.routes_path = function (innerPath, getRelative) {
    innerPath = typeof innerPath === 'string' ? innerPath : '';
    if (!!getRelative)
        return 'Http/routes';
    return app_path('Http/routes/' + innerPath);
};

// Sockets path
global.sockets_path = function (innerPath, getRelative) {
    innerPath = typeof innerPath === 'string' ? innerPath : '';
    if (!!getRelative)
        return 'Http/Sockets';
    return app_path('Http/Sockets/' + innerPath);
};

// Config path
global.config_path = function (innerPath, getRelative) {
    innerPath = typeof innerPath === 'string' ? innerPath : '';
    if (!!getRelative)
        return 'config';
    return app_path('config/' + innerPath);
};

// Resources path
global.resources_path = function (innerPath, getRelative) {
    innerPath = typeof innerPath === 'string' ? innerPath : '';
    if (!!getRelative)
        return 'resources';
    return base_path('resources/' + innerPath);
};
