'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('tb_size_thicknesses', [
      {
        size_thickness: 12.7,
        id_product: 1
      },
      {
        size_thickness: 12.7,
        id_product: 2
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('tb_size_thicknesses', null, {});
  }
};
