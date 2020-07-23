'use strict';
module.exports = (sequelize, DataTypes) => {
  const tb_static_content = sequelize.define('tb_static_content', {
    tnc: DataTypes.TEXT,
    installation_warranty: DataTypes.TEXT,
    privacy_policy: DataTypes.TEXT,
    id_lang: DataTypes.INTEGER,
    prefered_title: DataTypes.STRING,
    prefered_content: DataTypes.TEXT,
    video_title: DataTypes.STRING,
    video_subtitle: DataTypes.STRING,
    video_summary: DataTypes.TEXT,
    video_link: DataTypes.TEXT,
    promo_section_title: DataTypes.STRING,
    promo_section_subtitle: DataTypes.STRING,
    promo_section_caption: DataTypes.STRING,
    promo_section_link: DataTypes.STRING,
    promo_section_image: DataTypes.STRING,
    footer: DataTypes.TEXT
  }, {});
  tb_static_content.associate = models => {
    tb_static_content.belongsTo(models.tb_lang, {foreignKey: 'id_lang'})
  };
  return tb_static_content;
};