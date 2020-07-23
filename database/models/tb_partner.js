'use strict';
module.exports = (sequelize, DataTypes) => {
  const tb_partner = sequelize.define('tb_partner', {
    logo: DataTypes.STRING,
    partner_name: DataTypes.STRING,
    link: DataTypes.STRING
  }, {});
  tb_partner.associate = function(models) {
    // associations can be defined here
  };
  return tb_partner;
};