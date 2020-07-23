'use strict';
module.exports = (sequelize, DataTypes) => {
  const tb_profile = sequelize.define('tb_profile', {
    id_lang: DataTypes.INTEGER,
    about: DataTypes.TEXT,
    name: DataTypes.STRING,
    phone: DataTypes.STRING,
    fax: DataTypes.STRING,
    email: DataTypes.STRING,
    since: DataTypes.INTEGER
  }, {});
  tb_profile.associate = (models) => {
    // associations can be defined here
    tb_profile.hasMany(models.tb_address, {foreignKey: 'id_profile'})
    tb_profile.belongsTo(models.tb_lang, {foreignKey: 'id_lang'})

    tb_profile.hasMany(models.tb_why_us, {foreignKey: 'id_profile'})
  };
  return tb_profile;
};