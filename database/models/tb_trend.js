'use strict';
module.exports = (sequelize, DataTypes) => {
  const tb_trend = sequelize.define('tb_trend', {
    id_product: DataTypes.INTEGER,
    image: DataTypes.STRING
  }, {});
  tb_trend.associate = models => {
    // associations can be defined here
    tb_trend.belongsTo(models.tb_product, {foreignKey: "id_product"})
  };
  return tb_trend;
};