const knex = require('knex')
const kf = require('../../knexfile')

const config = process.env.NODE_ENV === 'test' ? kf.test : kf.development

const conn = knex(config)

module.exports = conn

