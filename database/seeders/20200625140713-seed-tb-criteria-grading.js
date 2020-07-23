'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('tb_criteria_gradings', [
      {
        id_lang: 1,
        id_product: 1,
        criteria: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Semper eget duis at tellus. Blandit turpis cursus in hac habitasse platea. At erat pellentesque adipiscing commodo. In nisl nisi scelerisque eu ultrices vitae auctor eu. Turpis massa tincidunt dui ut ornare lectus sit amet',
        note: 'eugiat scelerisque varius morbi enim nunc faucibus. Adipiscing elit pellentesque habitant morbi tristique senectus et netus et'
      },
      {
        id_lang: 2,
        id_product: 1,
        criteria: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Semper eget duis at tellus. Blandit turpis cursus in hac habitasse platea. At erat pellentesque adipiscing commodo. In nisl nisi scelerisque eu ultrices vitae auctor eu. Turpis massa tincidunt dui ut ornare lectus sit amet',
        note: 'eugiat scelerisque varius morbi enim nunc faucibus. Adipiscing elit pellentesque habitant morbi tristique senectus et netus et'
      },
      {
        id_lang: 3,
        id_product: 1,
        criteria: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Semper eget duis at tellus. Blandit turpis cursus in hac habitasse platea. At erat pellentesque adipiscing commodo. In nisl nisi scelerisque eu ultrices vitae auctor eu. Turpis massa tincidunt dui ut ornare lectus sit amet',
        note: 'eugiat scelerisque varius morbi enim nunc faucibus. Adipiscing elit pellentesque habitant morbi tristique senectus et netus et'
      },

      {
        id_lang: 1,
        id_product: 2,
        criteria: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Semper eget duis at tellus. Blandit turpis cursus in hac habitasse platea. At erat pellentesque adipiscing commodo. In nisl nisi scelerisque eu ultrices vitae auctor eu. Turpis massa tincidunt dui ut ornare lectus sit amet',
        note: 'eugiat scelerisque varius morbi enim nunc faucibus. Adipiscing elit pellentesque habitant morbi tristique senectus et netus et'
      },
      {
        id_lang: 2,
        id_product: 2,
        criteria: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Semper eget duis at tellus. Blandit turpis cursus in hac habitasse platea. At erat pellentesque adipiscing commodo. In nisl nisi scelerisque eu ultrices vitae auctor eu. Turpis massa tincidunt dui ut ornare lectus sit amet',
        note: 'eugiat scelerisque varius morbi enim nunc faucibus. Adipiscing elit pellentesque habitant morbi tristique senectus et netus et'
      },
      {
        id_lang: 3,
        id_product: 2,
        criteria: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Semper eget duis at tellus. Blandit turpis cursus in hac habitasse platea. At erat pellentesque adipiscing commodo. In nisl nisi scelerisque eu ultrices vitae auctor eu. Turpis massa tincidunt dui ut ornare lectus sit amet',
        note: 'eugiat scelerisque varius morbi enim nunc faucibus. Adipiscing elit pellentesque habitant morbi tristique senectus et netus et'
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('tb_criteria_gradings', null, {});
  }
};
