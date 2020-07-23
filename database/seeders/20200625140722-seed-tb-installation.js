'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('tb_installations', [
      {
        full_bonded: 'NO',
        nailed: 'NO',
        floated: 'NO',
        over_underfloor: 'NO'
      },
      {
        full_bonded: 'NO',
        nailed: 'NO',
        floated: 'NO',
        over_underfloor: 'NO'
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('tb_installations', null, {});
  }
};
