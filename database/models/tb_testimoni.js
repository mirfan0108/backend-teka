'use strict';
module.exports = (sequelize, DataTypes) => {
  const tb_testimoni = sequelize.define('tb_testimoni', {
    id_lang: DataTypes.INTEGER,
    testimoni: DataTypes.TEXT,
    client_name: DataTypes.STRING,
    image: DataTypes.STRING
  }, {});
  tb_testimoni.associate = (models) => {
    // associations can be defined here
    tb_testimoni.belongsTo(models.tb_lang, {foreignKey: 'id_lang'})
  };
  return tb_testimoni;
};