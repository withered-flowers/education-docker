"use strict";

const { faker } = require("@faker-js/faker");

const numberOfTask = 10;
let tasks = [];

for (let i = 0; i < numberOfTask; i++) {
  const objTask = {
    name: faker.name.jobTitle(),
    description: faker.name.jobDescriptor(),
    isCompleted: faker.datatype.boolean(),
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  tasks.push(objTask);
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await queryInterface.bulkInsert("Tasks", tasks, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Tasks", null, {});
  },
};
