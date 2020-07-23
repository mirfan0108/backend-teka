'use strict';
module.exports = (sequelize, DataTypes) => {
  const tb_lang = sequelize.define('tb_lang', {
    country_code: DataTypes.STRING,
    country_name: DataTypes.STRING,
    country_lang: DataTypes.STRING,
    country_flag: DataTypes.STRING
  }, {});
  tb_lang.associate = models => {
    // associations can be defined here
    tb_lang.hasMany(models.tb_banner, {foreignKey: 'id_lang'})
    tb_lang.hasMany(models.tb_project_gallery, {foreignKey: 'id_lang'})
    tb_lang.hasMany(models.tb_faq, {foreignKey: 'id_lang'})
    tb_lang.hasMany(models.tb_testimoni, {foreignKey: 'id_lang'})

    tb_lang.hasOne(models.tb_profile, {foreignKey: 'id_lang'})
    tb_lang.hasOne(models.tb_static_content, {foreignKey: 'id_lang'})

  };
  return tb_lang;
};