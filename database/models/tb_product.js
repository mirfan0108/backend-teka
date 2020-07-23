'use strict';
module.exports = (sequelize, DataTypes) => {
  const tb_product = sequelize.define('tb_product', {
    id_construction: DataTypes.INTEGER,
    id_specie: DataTypes.INTEGER,
    id_criteria_detail: DataTypes.INTEGER,
    id_installation: DataTypes.INTEGER,
    name: DataTypes.STRING,
    code: DataTypes.STRING,
    slug: DataTypes.STRING,
    range: DataTypes.STRING,
    pattern: DataTypes.STRING,
    process: DataTypes.STRING,
    finish: DataTypes.STRING,
    profile: DataTypes.STRING,
    edge_profile: DataTypes.STRING,
    top_layer: DataTypes.FLOAT,
    backing: DataTypes.STRING,
    packsize: DataTypes.FLOAT,
    grade: DataTypes.STRING,
    maintenance: DataTypes.TEXT,
    image: DataTypes.STRING
  }, {});
  tb_product.associate = models => {
    // associations can be defined here
    tb_product.hasOne(models.tb_prefered, {foreignKey: 'id_product'}),
    
    tb_product.hasMany(models.tb_criteria_grading, {foreignKey: 'id_product'})
    tb_product.hasMany(models.tb_color, {foreignKey: 'id_product'})
    tb_product.hasMany(models.tb_size_width, {foreignKey: 'id_product'})
    tb_product.hasMany(models.tb_size_length, {foreignKey: 'id_product'})
    tb_product.hasMany(models.tb_size_thickness, {foreignKey: 'id_product'})
    tb_product.hasMany(models.tb_trend, {foreignKey: 'id_product'})

    tb_product.belongsTo(models.tb_installation, {foreignKey: 'id_installation'})
    tb_product.belongsTo(models.tb_criteria_detail, {foreignKey: 'id_criteria_detail'})
    tb_product.belongsTo(models.tb_specie, {foreignKey: 'id_specie'}),
    tb_product.belongsTo(models.tb_construction, {foreignKey: 'id_construction'})

  };
  return tb_product;
};