module.exports.config =
{
    /**
     * Express and serving
     */
    express :
    {
        enabled : true,
        options : {}
    },

    // https://nodejs.org/api/http.html
    http    :
    {

    },

    // https://nodejs.org/api/https.html
    https   :
    {

    },

    // https://www.npmjs.com/package/spdy
    spdy    :
    {

    },

    // https://www.npmjs.com/package/express-force-ssl
    forceSSL:
    {
        enabled : process.env.FORCE_HTTPS == "true",
        options :
        {
            enable301Redirects  : true,
            httpsPort           : process.env.PORT_HTTPS,
            trustXFPHeader      : false,
            sslRequiredMessage  : 'SSL Required.'
        }
    },

    // https://github.com/expressjs/cookie-parser
    // https://github.com/expressjs/session
    session :
    {
        enabled : true,
        options :
        {
            key     : 's3ss10n',
            secret  : process.env.SECRET,
            cookie  :
            {
                "path"      : '/',
                "secure"    : true,
                "httpOnly"  : true,
                "maxAge"    : null
            },
            proxy   : true,
            resave  : true,
            saveUninitialized: false
        }
    },

    /**
     * Source manipulation
     */

    // https://github.com/expressjs/compression
    compress :
    {
        enabled : true,
        options : {}
    },

    // https://www.npmjs.com/package/morgan
    logger :
    {
        enabled : true,
        options : 'dev'
    },

    // https://github.com/expressjs/body-parser
    bodyParser :
    {
        enabled : true,
        options :
        {
            json :
            {
                enabled : true,
                options : {}
            },
            urlencoded :
            {
                enabled : true,
                options :
                {
                    extended : false
                }
            }
        }
    },

    /**
     * Security
     */

    // https://www.npmjs.com/package/csurf
    csrf    :
    {
        enabled : true,
        options : {}
    },

    // https://www.npmjs.com/package/helmet
    helmet  :
    {
        enabled : true,
        options :
        {
            noSniff :
            {
                enabled : true,
                options : {}
            }
        }
    },

    // https://www.npmjs.com/package/i18next
    i18next :
    {
        enabled : true,
        options :
        {
            debug: process.env.APP_DEBUG,
            fallbackLng : 'dev',
            detectLngFromPath       : false,
            forceDetectLngFromPath  : false,
            saveMissing : true,
            resSetPath  : lang_path("/__lng__/new.__ns__.json"),
            resGetPath  : lang_path("/__lng__/__ns__.json"),
            //preload     : languages,
            ignoreRoutes: ['images/', 'public/', 'css/', 'js/', 'assets/', 'img/'],
            cookie      : false,
            useCookie   : false,
            functions   :
            {
                log : require('debug')('express-go:i18n')
            },
            useLocalStorage : true
        }
    }
};