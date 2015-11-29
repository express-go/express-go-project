"use strict";

module.exports = function(sequelize, DataTypes)
{

    var Values = sequelize.define("Values",
        {
            attribute_id :
            {
                type        : DataTypes.INTEGER,
                validate    :
                {
                    isInt : true,
                    notNull: true
                }
            },
            entity_id :
            {
                type        : DataTypes.INTEGER,
                validate    :
                {
                    isInt : true,
                    notNull: true
                }
            },
            value_bool    : DataTypes.BOOLEAN,
            value_string  : DataTypes.STRING
        },
        {
            // define the table's name
            tableName: 'eav_values',

            // don't use camelcase for automatically added attributes but underscore style
            // so updatedAt will be updated_at
            underscored: true,

            // don't forget to enable timestamps!
            timestamps: true,

            // don't delete database entries but set the newly added attribute deletedAt
            // to the current date (when deletion was done). paranoid will only work if
            // timestamps are enabled
            paranoid: true
        }
    );


    return Values;

};