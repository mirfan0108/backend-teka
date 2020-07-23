'use strict';
module.exports = (sequelize, DataTypes) => {
  const tb_gallery_image = sequelize.define('tb_gallery_image', {
    id_project_gallery: DataTypes.INTEGER,
    name: DataTypes.STRING
  }, {});
  tb_gallery_image.associate = (models) => {
    // associations can be defined here
    tb_gallery_image.belongsTo(models.tb_project_gallery, {foreignKey: 'id_project_gallery'})
  };
  return tb_gallery_image;
};