'use strict';
module.exports = (sequelize, DataTypes) => {
  const tb_size_length = sequelize.define('tb_size_length', {
    size_length: DataTypes.FLOAT,
    id_product: DataTypes.INTEGER
  }, {});
  tb_size_length.associate = models => {
    // associations can be defined here
    tb_size_length.belongsTo(models.tb_product, {foreignKey: 'id_product'})
  };
  return tb_size_length;
};