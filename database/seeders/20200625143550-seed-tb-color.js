'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('tb_colors', [
      {
        name: 'White',
        id_color_type: 1,
        id_product: 1
      },
      {
        name: 'White',
        id_color_type: 1,
        id_product: 2
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('tb_colors', null, {});
  }
};
