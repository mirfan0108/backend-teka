'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('tb_banners', {
      id: {
        
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_lang: {
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      page: {
        type: Sequelize.STRING
      },
      subtitle: {
        type: Sequelize.STRING
      },
      content: {
        type: Sequelize.TEXT
      },
      link: {
        type: Sequelize.STRING
      },
      image: {
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
    return queryInterface.dropTable('tb_banners');
  }
};