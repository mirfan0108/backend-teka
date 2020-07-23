'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('tb_addresses', [
      {
        id_profile: 1,
        address: `Gedung Sapta Mulia
        Jl. Rawa Gelam V. Kav. OR/3B
        Kawasan Industri Pulo Gadung Jakarta 13930. Indonesia`,
        longitude: -6.203798,
        latitude: 106.913744
      },
      {
        id_profile: 2,
        address: `Gedung Sapta Mulia
        Jl. Rawa Gelam V. Kav. OR/3B
        Kawasan Industri Pulo Gadung Jakarta 13930. Indonesia`,
        longitude: -6.203798,
        latitude: 106.913744
      },
      {
        id_profile: 3,
        address: `Gedung Sapta Mulia
        Jl. Rawa Gelam V. Kav. OR/3B
        Kawasan Industri Pulo Gadung Jakarta 13930. Indonesia`,
        longitude: -6.203798,
        latitude: 106.913744
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('tb_addresses', null, {});
  }
};
