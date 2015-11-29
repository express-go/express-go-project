"use strict";

module.exports = function(sequelize, DataTypes)
{

    var EavObjects = sequelize.define("EavObjects",
        {
            name        : DataTypes.STRING(128),
            slug        : DataTypes.STRING(128),
            description : DataTypes.STRING
        },
        {
            // define the table's name
            tableName: 'eav_objects',

            // don't use camelcase for automatically added attributes but underscore style
            // so updatedAt will be updated_at
            underscored: true,

            // don't forget to enable timestamps!
            timestamps: true,

            // don't delete database entries but set the newly added attribute deletedAt
            // to the current date (when deletion was done). paranoid will only work if
            // timestamps are enabled
            paranoid: true,

            classMethods:
            {
                associate: function(models)
                {
                    EavObjects.hasMany(models.Attribute);
                    EavObjects.hasMany(models.EavEntity);
                }
            }
        }
    );


    return EavObjects;

};