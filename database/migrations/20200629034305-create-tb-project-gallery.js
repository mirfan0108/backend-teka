'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('tb_project_galleries', {
      id: {
        
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_lang: {
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      challenge: {
        type: Sequelize.TEXT
      },
      we_did: {
        type: Sequelize.TEXT
      },
      result: {
        type: Sequelize.TEXT
      },
      information_summary: {
        type: Sequelize.TEXT
      },
      client_name: {
        type: Sequelize.STRING
      },
      location: {
        type: Sequelize.STRING
      },
      date_project: {
        type: Sequelize.STRING
      },
      id_product: {
        type: Sequelize.INTEGER
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
    return queryInterface.dropTable('tb_project_galleries');
  }
};