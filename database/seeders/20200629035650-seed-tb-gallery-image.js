'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('tb_gallery_images', [
      {
        id_project_gallery: 1,
        name: 'project/prj-1.jpg'
      },
      {
        id_project_gallery: 1,
        name: 'project/prj-2.jpg'
      },
      {
        id_project_gallery: 1,
        name: 'project/prj-3.jpg'
      },
      {
        id_project_gallery: 1,
        name: 'project/prj-1.jpg'
      },

      {
        id_project_gallery: 2,
        name: 'project/prj-1.jpg'
      },
      {
        id_project_gallery: 2,
        name: 'project/prj-2.jpg'
      },
      {
        id_project_gallery: 2,
        name: 'project/prj-3.jpg'
      },
      {
        id_project_gallery: 2,
        name: 'project/prj-1.jpg'
      },

      {
        id_project_gallery: 3,
        name: 'project/prj-1.jpg'
      },
      {
        id_project_gallery: 3,
        name: 'project/prj-2.jpg'
      },
      {
        id_project_gallery: 3,
        name: 'project/prj-3.jpg'
      },
      {
        id_project_gallery: 3,
        name: 'project/prj-1.jpg'
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('tb_gallery_images', null, {});
  }
};
