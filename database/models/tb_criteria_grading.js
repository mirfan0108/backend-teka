'use strict';
module.exports = (sequelize, DataTypes) => {
  const tb_criteria_grading = sequelize.define('tb_criteria_grading', {
    criteria: DataTypes.TEXT,
    note: DataTypes.TEXT,
    id_lang: DataTypes.INTEGER,
    id_product: DataTypes.INTEGER
  }, {});
  tb_criteria_grading.associate = models => {
    // associations can be defined here
    tb_criteria_grading.belongsTo(models.tb_product, {foreignKey: 'id_product'})
  };
  return tb_criteria_grading;
};