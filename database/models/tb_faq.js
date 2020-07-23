'use strict';
module.exports = (sequelize, DataTypes) => {
  const tb_faq = sequelize.define('tb_faq', {
    id_lang: DataTypes.INTEGER,
    question: DataTypes.TEXT,
    answere: DataTypes.TEXT
  }, {});
  tb_faq.associate = (models) => {
    tb_faq.belongsTo(models.tb_lang, {foreignKey: 'id_lang'})
    // associations can be defined here
  };
  return tb_faq;
};