const bcrypt = require('bcrypt');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('tb_users', [
      {
        username: 'admin@mail.com',
        password: bcrypt.hashSync("password", 15),
        avatar: 'avatar/user-4.jpg',
        name: 'Joni Indo'
      }
    ], {});
  },

    

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('tb_users', null, {});
  }
};
