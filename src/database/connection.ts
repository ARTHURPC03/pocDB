import knex from 'knex'

const db = knex({
  client: 'pg',
  version: '8.3',
  connection: {
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
  },
})

export default db
