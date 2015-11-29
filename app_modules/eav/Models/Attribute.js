"use strict";

module.exports = function(sequelize, DataTypes)
{

    var Attribute = sequelize.define("Attribute",
        {
            /*object_id   :
            {
                type        : DataTypes.INTEGER,
                validate    :
                {
                    isInt : true,
                    notNull: true
                }
            },*/
            sort        : 'TINYINT(3)',
            type        : DataTypes.ENUM('BOOL','STRING','TEXT','INT','UINT','REAL','DATETIME','DATE','TIME','RELATION'),
            name        : DataTypes.STRING(128),
            slug        : DataTypes.STRING(128),
            description : DataTypes.STRING,
            help_text   : DataTypes.STRING,
            required    : DataTypes.BOOLEAN,
            hidden      : DataTypes.BOOLEAN,
            validation  : DataTypes.STRING
        },
        {
            // define the table's name
            tableName: 'eav_attributes',

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
                    Attribute.belongsTo(models.EavObjects,
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


    return Attribute;

};