'use strict';
module.exports = (sequelize, DataTypes) => {
  const tb_construction = sequelize.define('tb_construction', {
    name: DataTypes.STRING
  }, {});
  tb_construction.associate = models => {
    // associations can be defined here
    tb_construction.hasMany(models.tb_product, {foreignKey: 'id_construction'})
  };
  return tb_construction;
};