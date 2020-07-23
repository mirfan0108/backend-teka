'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('tb_size_lengths', [
      {
        size_length: 12.7,
        id_product: 1
      },
      {
        size_length: 24.7,
        id_product: 1
      },
      {
        size_length: 12.7,
        id_product: 2
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('tb_size_lengths', null, {});
  }
};
