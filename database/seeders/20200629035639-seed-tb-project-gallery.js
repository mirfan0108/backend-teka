'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('tb_project_galleries', [
      {
        id_lang: 1,
        name: 'Rumah Ipang',
        description: 'Pemasangan parket di rumah ipang menggunakan parket kayu Jati. Pemasangan dilakukan di ruang tengah, kamar tidur, dan belakang rumah',
        we_did: 'Untuk bahan finishing yang digunakan yaitu bahan MELAMINE dari IMPRA (2 Komp)',
        result: `Rumah Ipang jadi bagus`,
        client_name: 'Ipang',
        location: 'Tangerang Banten',
        date_project: '01-01-2020',
        id_product: 1
      },
      {
        id_lang: 2,
        name: `Ipang's house`,
        description: 'Installation of parquet in ipang homes using oak specie. Installation in the living room, bedroom, and back of the house',
        we_did: 'For finishing materials used are MELAMINE materials from IMPRA (2 Komp)',
        result: `Ipang's house has become nice`,
        client_name: 'Ipang',
        location: 'Tangerang Banten',
        date_project: '01-01-2020',
        id_product: 1
      },
      {
        id_lang: 3,
        name: `Ipangs Haus`,
        description: 'Installation von Parkett in Ipang-Häusern unter Verwendung von Eichenart. Installation im Wohnzimmer, Schlafzimmer und auf der Rückseite des Hauses',
        we_did: 'Als Veredelungsmaterialien werden MELAMIN-Materialien von IMPRA (2 Komp) verwendet.',
        result: `Ipangs Haus ist schön geworden`,
        client_name: 'Ipang',
        location: 'Tangerang Banten',
        date_project: '01-01-2020',
        id_product: 1
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('tb_project_galleries', null, {});
  }
};
