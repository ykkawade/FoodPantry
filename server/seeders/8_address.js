'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Addresses',
      [
        {
          user_id: 1,
          address: '117 E 57th St',
          address_line_2: 'apt. 2',
          city: 'New York',
          state: "NY",
          zip: '10022',
          country: 'US',
          location_name: 'Work',
          primary_address: true,

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 2,
          address: '13 William Street',
          address_line_2: 'apt. 2',
          city: 'New York',
          state: "NY",
          zip: '01101',
          country: 'US',
          location_name: 'Work',
          primary_address: true,

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 3,
          address: '3 Perrine Ave',
          address_line_2: 'apt. 602',
          city: 'Jersey City',
          state: "NJ",
          zip: '07306',
          country: 'US',
          location_name: 'Home',
          primary_address: true,

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 5,
          address: '39 E 58th St',
          address_line_2: 'apt. 2',
          city: 'New York',
          state: "NY",
          zip: '10022',
          country: 'US',
          location_name: 'Work',
          primary_address: true,

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 6,
          address: '214 W 42nd St',
          address_line_2: 'apt. 33',
          city: 'New York',
          state: "NY",
          zip: '10036',
          country: 'US',
          location_name: 'Work',
          primary_address: true,

          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Addresses', null, {});
  },
};
