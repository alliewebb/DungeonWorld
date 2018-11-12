const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
    getUsers: getUsers,
    getUser: getUser,
    addUser: addUser,
    getCharacters: getCharacters,
    getCharacter: getCharacter,
    getStrength: getStrength
}

function getUsers (db = connection) {
    return db('users').select()
  }
  
function getUser (id, db = connection) {
    return db('users').where('id', id).first()
  }

function addUser (user, db = connection) {
    return db('users')
    .insert({name: user})
}

function getCharacters (id, db = connection) {
    return db('characters').where('user_id', id).select()
}

function getCharacter (id, db = connection) {
    return db('characters').where('id', id).first()
}

function getStrength (stat, db = connection) {
    return db('characters')
    .where('id', id)
    .then((character) => {
        if (character.strength === 16)
            character.strengthMod === "+2"
    })
}