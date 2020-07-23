'use strict';
module.exports = (sequelize, DataTypes) => {
  const tb_why_us = sequelize.define('tb_why_us', {
    title: DataTypes.STRING,
    summary: DataTypes.STRING,
    id_profile: DataTypes.INTEGER
  }, {});
  tb_why_us.associate = (models) => {
    // associations can be defined here 52
    tb_why_us.belongsTo(models.tb_profile, {foreignKey: 'id_profile'})
  };
  return tb_why_us;
};