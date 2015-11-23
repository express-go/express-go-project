/**
 * User routes
 */

module.exports = function(app)
{
    app.resource('/user', App.Http.Controllers.UsersController);

};