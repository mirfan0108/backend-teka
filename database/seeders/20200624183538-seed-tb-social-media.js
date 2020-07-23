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
    return queryInterface.bulkInsert('tb_social_media', [
      {
        name: 'Facebook',
        icon_class: 'fa fa-facebook',
        link: 'https://www.facebook.com/tekaparquetjakarta'
      },
      {
        name: 'Twitter',
        icon_class: 'fa fa-twitter',
        link: 'https://twitter.com/tekaparquetid'
      },
      {
        name: "Instagram",
        icon_class: 'fa fa-instagram',
        link: 'https://www.instagram.com/tekaparquet/'
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
    return queryInterface.bulkDelete('tb_social_media', null, {});
  }
};
