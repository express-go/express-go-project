/**
 * Skeleton module Routes
 */

module.exports = function(app)
{
    //console.log(Modules, App);
    //process.exit();
    app.get(
        '/skeleton/welcome',
        'module.skeleton.welcome',
        Modules.Http.Controllers.SkeletonController.welcome
    );


    app.resource(
        '/skeleton',
        Modules.Http.Controllers.SkeletonController
    );

};
