'use strict';
module.exports = (sequelize, DataTypes) => {
  const tb_size_width = sequelize.define('tb_size_width', {
    size_width: DataTypes.FLOAT,
    id_product: DataTypes.INTEGER
  }, {});
  tb_size_width.associate = models => {
    // associations can be defined here
    tb_size_width.belongsTo(models.tb_product, {foreignKey: 'id_product'})
  };
  return tb_size_width;
};