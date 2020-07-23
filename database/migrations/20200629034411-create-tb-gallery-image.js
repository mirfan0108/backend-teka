'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('tb_gallery_images', {
      id: {
        
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_project_gallery: {
        type: Sequelize.INTEGER
      },
      name: {
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
    return queryInterface.dropTable('tb_gallery_images');
  }
};