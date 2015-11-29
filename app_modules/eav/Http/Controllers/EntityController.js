/**
 * EAV module Controller
 */

module.exports =
{
    /**
     * Global middleware
     * Running before all function in resource mode
     *
     * @param req
     * @param res
     * @param next
     */
    before  : function(req, res, next)
    {
        next();
    },

    /**
     * Home / list page
     *
     * @param req
     * @param res
     */
    index   : function(req, res)
    {
        res.send('I am a Admin module.');
    },

    /**
     * Create
     *
     * @param req
     * @param res
     */
    create  : function(req, res)
    {
        res.send("skeleton create");
    },

    /**
     * Store
     * @param req
     * @param res
     */
    store   : function(req, res)
    {
        console.log(req.params);
        res.send("skeleton store");
    },

    /**
     * Show
     *
     * @param req
     * @param res
     */
    show    : function(req, res)
    {
        res.send("skeleton show");
    },

    /**
     * Edit
     *
     * @param req
     * @param res
     */
    edit    : function(req, res)
    {
        console.log(req.params);
        res.send("skeleton edit");
    },

    /**
     * Update
     *
     * @param req
     * @param res
     */
    update  : function(req, res)
    {
        res.send("skeleton update");
    },

    /**
     * Destroy
     *
     * @param req
     * @param res
     */
    destroy : function(req, res)
    {
        res.send("skeleton destroy");
    },

    /**
     * Non-resource function
     *
     * @param req
     * @param res
     */
    welcome : function(req, res)
    {
        res.send('Welcome Skeleton module.');
    }
};
