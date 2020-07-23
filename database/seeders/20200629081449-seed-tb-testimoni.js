'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('tb_testimonis', [
      {
        id_lang: 1,
        testimoni: 'Saya mendapatkan penanganan yang sangat baik dan hasilnya sangat memuaskan',
        client_name: 'Ipang',
        image: `testimoni/t-1.jpg`
      },
      {
        id_lang: 2,
        testimoni: 'I got very good handling and the results were very satisfying',
        client_name: 'Ipang',
        image: `testimoni/t-1.jpg`
      },
      {
        id_lang: 3,
        testimoni: 'Ich habe ein sehr gutes Handling bekommen und die Ergebnisse waren sehr zufriedenstellend',
        client_name: 'Ipang',
        image: `testimoni/t-1.jpg`
      },

      {
        id_lang: 1,
        testimoni: 'Rumah saya jadi lebih harmoni dengan parket dan terasa sangat nyaman',
        client_name: 'Siti',
        image: `testimoni/t-2.jpg`
      },
      {
        id_lang: 2,
        testimoni: 'My house has become more harmonious with parquet and feels very comfortable',
        client_name: 'Siti',
        image: `testimoni/t-2.jpg`
      },
      {
        id_lang: 3,
        testimoni: 'Mein Haus ist harmonischer mit Parkett geworden und fühlt sich sehr wohl',
        client_name: 'Siti',
        image: `testimoni/t-2.jpg`
      }
    ], {});
  },
  
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('tb_testimonis', null, {});
  }
};
