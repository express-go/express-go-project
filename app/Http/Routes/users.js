/**
 * User routes
 */

module.exports = function(app)
{
    //console.log(App);
    //console.log("123");
    //process.exit();
    app.resource('/user', App.Http.Controllers.UsersController);

};