'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('tb_criteria_details', {
      id: {
        
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      origin: {
        type: Sequelize.STRING
      },
      certificate: {
        type: Sequelize.STRING
      },
      janka: {
        type: Sequelize.STRING
      },
      formal_emission: {
        type: Sequelize.STRING
      },
      penta_emmision: {
        type: Sequelize.STRING
      },
      slip_test: {
        type: Sequelize.STRING
      },
      reaction_fire: {
        type: Sequelize.STRING
      },
      thermal: {
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
    return queryInterface.dropTable('tb_criteria_details');
  }
};