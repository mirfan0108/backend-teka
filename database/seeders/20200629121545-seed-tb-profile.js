'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('tb_profiles', [
      {
        id_lang: 1,
        about: 'PT. Industri Parket Tanjung Kreasi adalah produsen lantai kayu yang didirikan pada tahun 1994 di Indonesia, dan anggota grup DSN, perusahaan publik yang terdaftar pada tahun 2012. Perusahaan ini mengkhususkan diri dalam produksi Lantai Kayu Rekayasa yang telah dikenal sebagai TEKA Parket Brand.',
        name: `TEKA PARQUET`,
        phone: `+62(21) 460 6979`,
        fax: `+62(21) 461 4057`,
        email: `teka@dsngroup.co.id`,
        since: '1994'
      },
      {
        id_lang: 2,
        about: 'PT. Tanjung Kreasi Parquet Industry is a wooden floor manufacturer established in 1994 in Indonesia, and a member of DSN group, a public company listed in 2012. The company is specializing in production of Engineered Wood Flooring which has been renowned as TEKA Parquet Brand',
        name: `TEKA PARQUET`,
        phone: `+62(21) 460 6979`,
        fax: `+62(21) 461 4057`,
        email: `teka@dsngroup.co.id`,
        since: '1994'
      },
      {
        id_lang: 3,
        about: 'PT. Tanjung Kreasi Parkettindustrie ist ein 1994 in Indonesien gegründeter Holzbodenhersteller und Mitglied der DSN-Gruppe, einer 2012 börsennotierten Gesellschaft. Das Unternehmen ist auf die Herstellung von Holzfußböden spezialisiert, die als TEKA Parkettmarke bekannt sind',
        name: `TEKA PARQUET`,
        phone: `+62(21) 460 6979`,
        fax: `+62(21) 461 4057`,
        email: `teka@dsngroup.co.id`,
        since: '1994'
      }
    ], {});
   
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('tb_profiles', null, {});
   
  }
};
