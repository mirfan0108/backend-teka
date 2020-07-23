'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('tb_size_widths', [
      {
        size_width: 90,
        id_product: 1
      },
      {
        size_width: 180,
        id_product: 1
      },
      {
        size_width: 360,
        id_product: 1
      },
      {
        size_width: 180,
        id_product: 2
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('tb_size_widths', null, {});
  }
};
