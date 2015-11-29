"use strict";

module.exports = function(sequelize, DataTypes)
{

    var EavEntity = sequelize.define("EavEntity",
        {
            /*object_id   :
            {
                type        : DataTypes.INTEGER,
                validate    :
                {
                    isInt : true,
                    notNull: true
                }
            }*/
        },
        {
            // define the table's name
            tableName: 'eav_entity',

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
                associate: function (models)
                {
                    EavEntity.belongsTo(models.EavObjects,
                        {
                            //onUpdate: "CASCADE",
                            //onDelete: "CASCADE",
                            foreignKey: {
                                allowNull: false
                            }
                        });
                }
            }
        }
    );


    return EavEntity;

};