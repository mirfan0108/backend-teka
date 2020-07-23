'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('tb_why_us', [
      {
        id_profile: 1,
        title: 'BAHAN',
        summary: 'Parket TEKA menggunakan bahan baku hijau'
      },
      {
        id_profile: 1,
        title: 'KUALITAS',
        summary: 'Kualitas terbaik'
      },
      {
        id_profile: 1,
        title: 'SERTIFIKAT',
        summary: 'Sudah memiliki banyak sertifikat'
      },
      {
        id_profile: 1,
        title: 'PRODUK',
        summary: 'Banyak variasi produk'
      },

      {
        id_profile: 2,
        title: 'MATERIAL',
        summary: 'TEKA Parquet use green raw material'
      },
      {
        id_profile: 2,
        title: 'QUALITY',
        summary: 'Good Quality'
      },
      {
        id_profile: 2,
        title: 'CERTIFICATION',
        summary: 'Many certifications'
      },
      {
        id_profile: 2,
        title: 'PRODUCT',
        summary: 'Many product variations'
      },

      {
        id_profile: 3,
        title: 'MATERIAL',
        summary: 'TEKA Parquet use green raw material'
      },
      {
        id_profile: 3,
        title: 'QUALITÄT',
        summary: 'Gute qualität'
      },
      {
        id_profile: 3,
        title: 'ZERTIFIZIERUNG',
        summary: 'Viele Zertifizierungen'
      },
      {
        id_profile: 3,
        title: 'PRODUKT',
        summary: 'Viele Produktvarianten'
      }


    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('tb_why_us', null, {});
  }
};
