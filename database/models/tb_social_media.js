'use strict';
module.exports = (sequelize, DataTypes) => {
  const tb_social_media = sequelize.define('tb_social_media', {
    name: DataTypes.STRING,
    icon_class: DataTypes.STRING,
    link: DataTypes.TEXT
  }, {});
  tb_social_media.associate = function(models) {
    // associations can be defined here
  };
  return tb_social_media;
};