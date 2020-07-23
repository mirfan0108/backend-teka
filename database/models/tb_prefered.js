'use strict';
module.exports = (sequelize, DataTypes) => {
  const tb_prefered = sequelize.define('tb_prefered', {
    id_product: DataTypes.INTEGER,
  }, {});
  tb_prefered.associate = models => {
    tb_prefered.belongsTo(models.tb_product, {foreignKey: 'id_product'})
    // associations can be defined here
  };
  return tb_prefered;
};