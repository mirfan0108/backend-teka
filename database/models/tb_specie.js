'use strict';
module.exports = (sequelize, DataTypes) => {
  const tb_specie = sequelize.define('tb_specie', {
    name: DataTypes.STRING,
    code: DataTypes.STRING
  }, {});
  tb_specie.associate = models => {
    // associations can be defined here
    tb_specie.hasMany(models.tb_product, {foreignKey: 'id_specie'})
  };
  return tb_specie;
};