/**
 * Skeleton module Routes
 */

module.exports = function(app)
{

    /*app.get(
        '/skeleton/welcome',
        'module.skeleton.welcome',
        Modules.Http.Controllers.SkeletonController.welcome
    );*/


    app.resource(
        '/eav',
        Modules.Eav.Http.Controllers.EavController
    );

};
