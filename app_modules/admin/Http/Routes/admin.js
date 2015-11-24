/**
 * Skeleton module Routes
 */

module.exports = function(app)
{

    app.get(
        '/skeleton/welcome',
        'module.skeleton.welcome',
        App.Modules.Http.Controllers.SkeletonController.welcome
    );


    app.resource(
        '/skeleton',
        App.Modules.Http.Controllers.SkeletonController
    );

};
