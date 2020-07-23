'use strict';
module.exports = (sequelize, DataTypes) => {
  const tb_size_thickness = sequelize.define('tb_size_thickness', {
    size_thickness: DataTypes.FLOAT,
    id_product: DataTypes.INTEGER
  }, {});
  tb_size_thickness.associate = models => {
    // associations can be defined here
    tb_size_thickness.belongsTo(models.tb_product, {foreignKey: 'id_product'})
  };
  return tb_size_thickness;
};