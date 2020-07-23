'use strict';
module.exports = (sequelize, DataTypes) => {
  const tb_color_type = sequelize.define('tb_color_type', {
    id_lang: DataTypes.INTEGER,
    name: DataTypes.STRING
  }, {});
  tb_color_type.associate = models => {
    // associations can be defined here
    tb_color_type.hasMany(models.tb_color, {foreignKey: 'id_color_type'})
  };
  return tb_color_type;
};