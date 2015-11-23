/**
 * Users Controller
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
        /*var id = req.params.user_id;
         if (!id) return next();
         // pretend to query a database...
         process.nextTick(function(){
         req.user = db.users[id];
         // cant find that user
         if (!req.user) return next('route');
         // found it, move on to the routes
         next();
         });*/

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
        res.send('I am a Users module.0121 :D');
    },

    /**
     * Create
     *
     * @param req
     * @param res
     */
    create  : function(req, res)
    {
        res.send("Users create");
    },

    /**
     * Store
     * @param req
     * @param res
     */
    store   : function(req, res)
    {
        console.log(req.params);
        res.send("Users store");
    },

    /**
     * Show
     *
     * @param req
     * @param res
     */
    show    : function(req, res)
    {
        res.send("Users show");
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
        res.send("Users edit");
    },

    /**
     * Update
     *
     * @param req
     * @param res
     */
    update  : function(req, res)
    {
        res.send("Users update");
    },

    /**
     * Destroy
     *
     * @param req
     * @param res
     */
    destroy : function(req, res)
    {
        res.send("Users destroy");
    }
};
