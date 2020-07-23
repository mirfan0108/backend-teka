'use strict';
module.exports = (sequelize, DataTypes) => {
  const tb_project_gallery = sequelize.define('tb_project_gallery', {
    id_lang: DataTypes.INTEGER,
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    challenge: DataTypes.TEXT,
    we_did: DataTypes.TEXT,
    result: DataTypes.TEXT,
    information_summary: DataTypes.TEXT,
    client_name: DataTypes.STRING,
    location: DataTypes.STRING,
    id_product: DataTypes.INTEGER,
    date_project: DataTypes.STRING
  }, {});
  tb_project_gallery.associate = (models) => {
    // associations can be defined here
    tb_project_gallery.hasMany(models.tb_gallery_image, {foreignKey: 'id_project_gallery'})
    tb_project_gallery.belongsTo(models.tb_lang, {foreignKey: 'id_lang'})
  };
  return tb_project_gallery;
};