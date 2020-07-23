'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('tb_social_media', {
      id: {
        
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      icon_class: {
        type: Sequelize.STRING
      },
      link: {
        type: Sequelize.TEXT
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
    return queryInterface.dropTable('tb_social_media');
  }
};