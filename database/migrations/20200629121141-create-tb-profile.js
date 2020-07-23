'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('tb_profiles', {
      id: {
        
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_lang: {
        type: Sequelize.INTEGER
      },
      about: {
        type: Sequelize.TEXT
      },
      name: {
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.STRING
      },
      fax: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      since: {
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
    return queryInterface.dropTable('tb_profiles');
  }
};