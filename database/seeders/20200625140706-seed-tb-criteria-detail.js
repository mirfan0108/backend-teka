'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('tb_criteria_details', [
      {
        origin: 'USA',
        certificate: 'Lorem ipsum is placeholder text',
        janka: 'Lorem ipsum is placeholder text',
        formal_emission: 'Lorem ipsum is placeholder text',
        penta_emmision: 'Lorem ipsum is placeholder text',
        slip_test: 'Lorem ipsum is placeholder text',
        reaction_fire: 'Lorem ipsum is placeholder text',
        thermal: 'Lorem ipsum is placeholder text'
      },
      {
        origin: 'INDONESIA',
        certificate: 'Lorem ipsum is placeholder text',
        janka: 'Lorem ipsum is placeholder text',
        formal_emission: 'Lorem ipsum is placeholder text',
        penta_emmision: 'Lorem ipsum is placeholder text',
        slip_test: 'Lorem ipsum is placeholder text',
        reaction_fire: 'Lorem ipsum is placeholder text',
        thermal: 'Lorem ipsum is placeholder text'
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('tb_criteria_details', null, {});
  }
};
