'use strict';
module.exports = (sequelize, DataTypes) => {
  const tb_color = sequelize.define('tb_color', {
    id_product: DataTypes.INTEGER,
    id_color_type: DataTypes.INTEGER,
    name: DataTypes.STRING
  }, {});
  tb_color.associate = models => {
    // associations can be defined here
    tb_color.belongsTo(models.tb_color_type, {foreignKey: 'id_color_type'})
    tb_color.belongsTo(models.tb_product, {foreignKey: 'id_product'})
  };
  return tb_color;
};