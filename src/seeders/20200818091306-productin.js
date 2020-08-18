'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('product_in', [{
      date: '2020-08-17 01:40:30',
      total: 20,
      productId: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('product_in', null, {});
  }
};
