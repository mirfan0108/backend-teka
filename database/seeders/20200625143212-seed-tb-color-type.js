'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('tb_color_types', [
      {
        name: 'light',
      },
      {
        name: 'medium dark',
      },
      {
        name: 'dark',
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('tb_color_types', null, {});
  }
};
