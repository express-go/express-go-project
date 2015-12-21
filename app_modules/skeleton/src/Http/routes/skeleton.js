/**
 * Skeleton module Routes
 */

module.exports.router = function(app)
{
    app.get(
        '/skeleton/welcome',
        'module.skeleton.welcome',
        Modules.Skeleton.Http.Controllers.SkeletonController.welcome
    );

    app.resource(
        '/skeleton',
        Modules.Skeleton.Http.Controllers.SkeletonController
    );

};
