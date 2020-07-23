'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('tb_size_lengths', {
      id: {
        
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      size_length: {
        type: Sequelize.FLOAT
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
    return queryInterface.dropTable('tb_size_lengths');
  }
};