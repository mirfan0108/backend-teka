'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('tb_products', [
      {
        id_construction: 1,
        id_specie: 1,
        id_criteria_detail: 1,
        id_installation: 1,
        name: 'White Mapple',
        slug: 'white-mapple-1',
        code: "MPL001",
        range: "EuroPlank",
        pattern: "1-strip",
        process: "Sanded",
        finish: 'Satin Lacquered',
        profile: 'Click System',
        edge_profile: '4 Sided Bevelled Edge',
        top_layer: 1.5,
        backing: 'Polar Plywood',
        packsize: 2.5,
        grade: 'Select',
        maintenance: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
        image: 'product/7d0881d0_thumbnail.jpg'
      },

      {
        id_construction: 2,
        id_specie: 4,
        id_criteria_detail: 2,
        id_installation: 2,
        name: 'White Oak',
        slug: 'white-oak-1',
        code: "OAK001",
        range: "AsiaPlank",
        pattern: "1-strip",
        process: "Sanded",
        finish: 'Satin Lacquered',
        profile: 'Click System',
        edge_profile: '4 Sided Bevelled Edge',
        top_layer: 1.5,
        backing: 'Polar Plywood',
        packsize: 2.5,
        grade: 'Select',
        maintenance: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
        image: 'product/7d08832d_thumbnail.jpg'
      },

      
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('tb_products', null, {});
  }
};
