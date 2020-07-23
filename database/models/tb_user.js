'use strict';
module.exports = (sequelize, DataTypes) => {
  const tb_user = sequelize.define('tb_user', {
    username: DataTypes.TEXT,
    password: DataTypes.TEXT,
    avatar: DataTypes.STRING,
    name: DataTypes.STRING
  }, {});
  tb_user.associate = (models) => {
    // associations can be defined here
  };
  return tb_user;
};