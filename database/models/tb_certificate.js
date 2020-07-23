'use strict';
module.exports = (sequelize, DataTypes) => {
  const tb_certificate = sequelize.define('tb_certificate', {
    image: DataTypes.STRING,
    name: DataTypes.STRING
  }, {});
  tb_certificate.associate = (models) => {
    // associations can be defined here
    
  };
  return tb_certificate;
};