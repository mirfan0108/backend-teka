'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('tb_partners', [
      {
        logo: 'clients/1.png',
        partner_name: 'Test 1',
        link: 'javascript:void(0)'
      },
      {
        logo: 'clients/2.png',
        partner_name: 'Test 2',
        link: 'javascript:void(0)'
      },
      {
        logo: 'clients/3.png',
        partner_name: 'Test 3',
        link: 'javascript:void(0)'
      },
      {
        logo: 'clients/4.png',
        partner_name: 'Test 4',
        link: 'javascript:void(0)'
      },
      {
        logo: 'clients/5.png',
        partner_name: 'Test 5',
        link: 'javascript:void(0)'
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('tb_partners', null, {});
  }
};
