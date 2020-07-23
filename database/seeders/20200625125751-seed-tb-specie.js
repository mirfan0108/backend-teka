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
    return queryInterface.bulkInsert('tb_species', [
      { name: 'Mapple', code:'MPL' },
      { name: 'Acacia', code:'ACA' },
      { name: 'Beech', code:'BEC' },
      { name: 'Oak', code:'OAK' },
      { name: 'Ash', code:'ASH' },
      { name: 'Cherry', code:'CHR' },
      { name: 'Walnut', code:'WLN' },
      { name: 'Sucupira', code:'SCP' }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete('tb_species', null, {});
  }
};
