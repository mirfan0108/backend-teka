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
    return queryInterface.bulkInsert('tb_banners', [
      {
        id_lang: 1,
        page: 'home',
        title: "Selamat Datang di Teka Parquet",
        subtitle: '',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
        link: '/about',
        image: 'slide/slide-1-1920x850.jpg'
      },
      {
        id_lang: 1,
        page: 'home',
        title: "Ayo visualisasikan ruangan anda dengan produk kamu",
        subtitle: '',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
        link: '/visualize',
        image: 'slide/slide-2-1920x850.jpg'
      },
      {
        id_lang: 1,
        page: 'home',
        title: "Produk Paling diminati",
        subtitle: 'Square Versailles',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
        link: '/product',
        image: 'slide/slide-3-1920x850.jpg'
      },
      {
        id_lang: 2,
        page: 'home',
        title: "Welcome To Teka Parquet",
        subtitle: '',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
        link: '/about',
        image: 'slide/slide-1-1920x850.jpg'
      },
      {
        id_lang: 2,
        page: 'home',
        title: "Let's Visualize Your Room",
        subtitle: '',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
        link: '/visualize',
        image: 'slide/slide-2-1920x850.jpg'
      },
      {
        id_lang: 2,
        page: 'home',
        title: "Most Popular Product",
        subtitle: 'Square Versailles',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
        link: '/product',
        image: 'slide/slide-3-1920x850.jpg'
      },
      {
        id_lang: 3,
        page: 'home',
        title: "Willkommen bei Teka Parkett",
        subtitle: '',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
        link: '/about',
        image: 'slide/slide-1-1920x850.jpg'
      },
      {
        id_lang: 3,
        page: 'home',
        title: "Lassen Sie uns Ihr Zimmer visualisieren",
        subtitle: '',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
        link: '/visualize',
        image: 'slide/slide-2-1920x850.jpg'
      },
      {
        id_lang: 3,
        page: 'home',
        title: "Beliebtestes Produkt",
        subtitle: 'Square Versailles',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
        link: '/product',
        image: 'slide/slide-3-1920x850.jpg'
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
    return queryInterface.bulkDelete('tb_banners', null, {});
  }
};
