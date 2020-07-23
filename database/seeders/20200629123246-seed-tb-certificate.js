'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(`tb_certificates`, [
      {
        image: `cert/cert-1.jpg`,
        name: 'SERTIFIKAT BM TRADA'
      },
      {
        image: `cert/cert-2.jpg`,
        name: 'SERTIFIKAT AKTIF DECK SOFT LOC WHITE OAK'
      },
      {
        image: `cert/cert-3.jpg`,
        name: 'SERTIFIKAT MUTU'
      },
      {
        image: `cert/cert-4.jpg`,
        name: 'SERTIFIKAT REALWOOD'
      },
      {
        image: `cert/cert-5.jpg`,
        name: 'SERTIFIKAT PEFC'
      },
      {
        image: `cert/cert-6.jpg`,
        name: 'SERTIFIKAT FLOORSCORE'
      },
      {
        image: `cert/cert-7.jpg`,
        name: 'SERTIFIKAT FSC'
      }
    ], {});
   
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('tb_certificates', null, {});
  }
};
