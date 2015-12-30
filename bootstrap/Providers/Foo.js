/**
 * Sample "foo" loader
 */

module.exports.provider = function( app )
{
    return {

        /**
         * Prefix used name for components
         * Ex.: module.exports.prefix = {};
         *
         * Use "null" for disable
         *
         * YOU CAN OVERRIDE HERE CORE PROVIDER PREFIX!
         * Ex.: config
         *
         * @returns {string}
         */
        exportName : function()
        {
            return 'foo';
        },


        /**
         * Load object into global namespace
         *
         * Use "false" for disable
         *
         * @returns {boolean}
         */
        exportNamespace : function()
        {
            return true;
        },


        /**
         * Manual or automatic booting
         * Default, if not defined: false [automatic]
         *
         * Use: app.boot("Foo")
         *
         * @returns {boolean}
         */
        manualBoot : function()
        {
            return false;
        },


        /**
         * Register method
         *
         * @param loadObject
         * @param nameObject
         * @returns any
         */
        register : function( loadObject, nameObject )
        {
        },


        /**
         * Boot method
         *
         * @param app
         * @returns void
         */
        boot : function( app )
        {
        },


        /**
         * Loader method
         *
         * You can override default object initialization method
         *
         * @param loadObject
         * @param nameObject
         * @returns {any}
         */
        loader : function( loadObject, nameObject )
        {
            // Use default method
            return null;

            // The default method
            // return loadObject( app );
        },


        /**
         * Disable saving loaded object
         *
         * You can "reboot" and re-use loader, if value "false"
         * Default true, use one instance
         *
         * @returns {boolean}
         */
        loaderCache : function()
        {
            return true;
        }

    };
};
