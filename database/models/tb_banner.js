'use strict';
module.exports = (sequelize, DataTypes) => {
  const tb_banner = sequelize.define('tb_banner', {
    id_lang: DataTypes.INTEGER,
    page: DataTypes.STRING,
    title: DataTypes.STRING,
    subtitle: DataTypes.STRING,
    content: DataTypes.TEXT,
    link: DataTypes.STRING,
    image: DataTypes.TEXT
  }, {});
  tb_banner.associate = models => {
    // associations can be defined here
    tb_banner.belongsTo(models.tb_lang, {foreignKey: 'id_lang'})
  };
  return tb_banner;
};