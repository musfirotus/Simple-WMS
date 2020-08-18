'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [{
      full_name: 'John Doe',
      username: 'johndoe',
      email: 'example@example.com',
      phone_number: '08123456789',
      salt: '',
      password: 'passjohn',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
