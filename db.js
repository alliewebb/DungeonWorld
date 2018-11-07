const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)
const devDB = connection

module.exports = {
    getUsers: getUsers,
    getUser: getUser
}

function getUsers (db = connection) {
    return db('users').select()
  }
  
  function getUser (id, db = connection) {
    return db('users').where('id', id).first()
  }