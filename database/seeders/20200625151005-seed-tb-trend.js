'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('tb_trends', [
      {
        id_product: 1,
        image: 'trending/1.jpg'
      },
      {
        id_product: 2,
        image: 'trending/2.jpg'
      },
      {
        id_product: 1,
        image: 'trending/3.jpg'
      },
      {
        id_product: 2,
        image: 'trending/4.jpg'
      },
      {
        id_product: 1,
        image: 'trending/5.jpg'
      },
      {
        id_product: 2,
        image: 'trending/6.jpg'
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('tb_trends', null, {});
  }
};
