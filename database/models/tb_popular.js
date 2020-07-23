'use strict';
module.exports = (sequelize, DataTypes) => {
  const tb_popular = sequelize.define('tb_popular', {
    id_product: DataTypes.INTEGER,
    image: DataTypes.STRING
  }, {});
  tb_popular.associate = models => {
    // associations can be defined here
    tb_popular.belongsTo(models.tb_product, {foreignKey: 'id_product'})
  };
  return tb_popular;
};