require('./bootstrap');

var app = require('express-go')( global );

// Your express app functions
// app.use(...)

//app.sequelize.models.eav_attributes
/*App.Modules.Models.Attribute
    .findAndCountAll({
        //where: {
        //    title: {
        //        $like: 'foo%'
        //    }
        //},
        //offset: 10,
        //limit: 2
    })
    .then(function(result) {
        console.log(result.count);
        console.log(result.rows[0]);
        process.exit();
    });*/

/*
App.Modules.Models.Attribute
    .findAndCountAll({
        //where: {
        //    title: {
        //        $like: 'foo%'
        //    }
        //},
        //offset: 10,
        //limit: 2
        include: [ App.Modules.Models.EavObjects ]
    })
    .then(function(result) {
        //console.log(result.count);
        console.log(result.rows[0].EavObject);
        process.exit();
    });
*/



//.findAll({
    //include: [ models.Task ]
//}).then(function(users) {

//    console.log(users);

    /*res.render('index', {
        title: 'Express',
        users: users
    });*/
//});


//console.log(App.Modules.Models.Attribute, app.sequelize.models.eav_attributes);

//console.log(App.Modules.Models);
//process.exit();


/*********************************/

/*
App.Modules.Models.EavObjects
    .findAndCountAll({
        //where: {
        //    title: {
        //        $like: 'foo%'
        //    }
        //},
        //offset: 10,
        //limit: 2
        include: [
            App.Modules.Models.Attribute,
            App.Modules.Models.EavEntity
        ]
    })
    .then(function(result) {
        //console.log(result.count);
        //console.log(result.rows[0].Entities);
        //process.exit();
    });


App.Modules.Models.EavEntity
    .findAndCountAll({
        //where: {
        //    title: {
        //        $like: 'foo%'
        //    }
        //},
        //offset: 10,
        //limit: 2
        include: [ App.Modules.Models.EavObjects ]
    })
    .then(function(result) {
        console.log(result.count);
        console.log(result.rows[0].EavObject);
        //process.exit();
    });

*/

module.exports = app;
