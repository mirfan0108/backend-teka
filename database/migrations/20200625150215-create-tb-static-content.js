'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('tb_static_contents', {
      id: {
        
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      tnc: {
        type: Sequelize.TEXT
      },
      installation_warranty: {
        type: Sequelize.TEXT
      },
      privacy_policy: {
        type: Sequelize.TEXT
      },
      id_lang: {
        type: Sequelize.INTEGER
      },
      prefered_title: {
        type: Sequelize.STRING
      },
      prefered_content: {
        type: Sequelize.TEXT
      },
      video_title: {
        type: Sequelize.STRING
      },
      video_subtitle: {
        type: Sequelize.STRING
      },
      video_summary: {
        type: Sequelize.TEXT
      },
      video_link: {
        type: Sequelize.TEXT
      },
      promo_section_title: {
        type: Sequelize.STRING
      },
      promo_section_subtitle: {
        type: Sequelize.STRING
      },
      promo_section_caption: {
        type: Sequelize.STRING
      },
      promo_section_link: {
        type: Sequelize.STRING
      },
      promo_section_image: {
        type: Sequelize.STRING
      },
      footer: {
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
    return queryInterface.dropTable('tb_static_contents');
  }
};