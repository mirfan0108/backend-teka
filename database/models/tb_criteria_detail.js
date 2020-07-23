'use strict';
module.exports = (sequelize, DataTypes) => {
  const tb_criteria_detail = sequelize.define('tb_criteria_detail', {
    origin: DataTypes.STRING,
    certificate: DataTypes.STRING,
    janka: DataTypes.STRING,
    formal_emission: DataTypes.STRING,
    penta_emmision: DataTypes.STRING,
    slip_test: DataTypes.STRING,
    reaction_fire: DataTypes.STRING,
    thermal: DataTypes.STRING
  }, {});
  tb_criteria_detail.associate = models => {
    // associations can be defined here
    tb_criteria_detail.hasOne(models.tb_product, {foreignKey: 'id_criteria_detail'})
  };
  return tb_criteria_detail;
};