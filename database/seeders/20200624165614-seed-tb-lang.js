'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('tb_langs', [
      {
        country_code: 'ID',
        country_name: 'INDONESIA',
        country_lang: 'BAHASA',
        country_flag: 'flag/flag-id.png'
      },
      {
        country_code: 'EN',
        country_name: 'ENGLISH',
        country_lang: 'LANGUAGE',
        country_flag: 'flag/flag-us.png'
      },
      {
        country_code: 'DE',
        country_name: 'GERMANY',
        country_lang: 'SPRACHE',
        country_flag: 'flag/flag-deu.png'
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('tb_langs', null, {});
  }
};
