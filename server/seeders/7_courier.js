'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Couriers',
      [
        {
          user_id: 6,
          first_name: 'Bryan',
          last_name: 'Smith',
          availability: true,
          number_of_deliveries: 0,

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 1,
          first_name: 'Jon',
          last_name: 'Bron',
          availability: true,
          number_of_deliveries: 0,

          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Couriers', null, {});
  },
};
