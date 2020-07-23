'use strict';
module.exports = (sequelize, DataTypes) => {
  const tb_address = sequelize.define('tb_address', {
    id_profile: DataTypes.INTEGER,
    address: DataTypes.TEXT,
    longitude: DataTypes.FLOAT,
    latitude: DataTypes.FLOAT
  }, {});
  tb_address.associate = (models) => {
    // associations can be defined here
    tb_address.belongsTo(models.tb_profile, {foreignKey: 'id_profile'})
  };
  return tb_address;
};