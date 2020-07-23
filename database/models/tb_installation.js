'use strict';
module.exports = (sequelize, DataTypes) => {
  const tb_installation = sequelize.define('tb_installation', {
    full_bonded: DataTypes.STRING,
    nailed: DataTypes.STRING,
    floated: DataTypes.STRING,
    over_underfloor: DataTypes.STRING
  }, {});
  tb_installation.associate = models => {
    // associations can be defined here
    tb_installation.hasOne(models.tb_product, {foreignKey: 'id_installation'})
  };
  return tb_installation;
};