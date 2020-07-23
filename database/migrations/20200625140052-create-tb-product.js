'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('tb_products', {
      id: {
        
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_construction: {
        type: Sequelize.INTEGER
      },
      id_specie: {
        type: Sequelize.INTEGER
      },
      id_criteria_detail: {
        type: Sequelize.INTEGER
      },
      id_installation: {
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      slug: {
        type: Sequelize.STRING
      },
      code: {
        type: Sequelize.STRING
      },
      range: {
        type: Sequelize.STRING
      },
      pattern: {
        type: Sequelize.STRING
      },
      process: {
        type: Sequelize.STRING
      },
      finish: {
        type: Sequelize.STRING
      },
      profile: {
        type: Sequelize.STRING
      },
      edge_profile: {
        type: Sequelize.STRING
      },
      top_layer: {
        type: Sequelize.FLOAT
      },
      backing: {
        type: Sequelize.STRING
      },
      packsize: {
        type: Sequelize.FLOAT
      },
      grade: {
        type: Sequelize.STRING
      },
      maintenance: {
        type: Sequelize.TEXT
      },
      image: {
        type: Sequelize.STRING
      },
      createdAt: {
        
        type: Sequelize.DATE
      },
      updatedAt: {
        
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('tb_products');
  }
};