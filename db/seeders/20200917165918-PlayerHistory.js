'use strict'
const { v4: uuidv4 } = require('uuid')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'user_game_history',
      [
        {
          log_id: uuidv4(),
          user_id: '06896bd4-8cbc-48c6-8c46-9364a6d939c4',
          level: 3,
          experience: 250,
          last_login: new Date(),
        },
        {
          log_id: uuidv4(),
          user_id: '6dcb3b28-d798-4cec-80b5-516bfe18c25b',
          level: 2,
          experience: 150,
          last_login: new Date(),
        },
        {
          log_id: uuidv4(),
          user_id: '7bbe267d-e1aa-41d5-9a48-50e74fc04400',
          level: 5,
          experience: 350,
          last_login: new Date(),
        },
        {
          log_id: uuidv4(),
          user_id: '7bbe267d-e1aa-41d5-9a48-50e74fc04400',
          level: 5,
          experience: 450,
          last_login: new Date(),
        },
        {
          log_id: uuidv4(),
          user_id: '7bbe267d-e1aa-41d5-9a48-50e74fc04400',
          level: 5,
          experience: 525,
          last_login: new Date(),
        },
        {
          log_id: uuidv4(),
          user_id: '7bbe267d-e1aa-41d5-9a48-50e74fc04400',
          level: 6,
          experience: 550,
          last_login: new Date(),
        },
        {
          log_id: uuidv4(),
          user_id: '06896bd4-8cbc-48c6-8c46-9364a6d939c4',
          level: 3,
          experience: 275,
          last_login: new Date(),
        },
      ],
      {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('user_game_history', null, {})
  },
}
