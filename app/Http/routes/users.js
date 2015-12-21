/**
 * User routes
 */

module.exports.router = function(app)
{
    app.resource('/user', App.Http.Controllers.UsersController);
};