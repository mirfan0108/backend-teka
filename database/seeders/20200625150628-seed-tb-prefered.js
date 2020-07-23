'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('tb_prefereds', [
      {
        id_product: 1
      },
      {
        id_product: 2
      },
      {
        id_product: 1
      },
      {
        id_product: 2
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('tb_prefereds', null, {});
  }
};
