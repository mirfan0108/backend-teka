'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('tb_constructions', [
      { name: 'TLF', slug: 'tlf' }, 
      { name: 'PBF', slug: 'pbf'}, 
      { name: 'Herringbone', slug: 'herringbone'}, 
      { name: 'Design Parquet', slug: 'design-parquet'}, 
      { name: 'Chevron', slug: 'chevron'}
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete('tb_constructions', null, {});
  }
};
