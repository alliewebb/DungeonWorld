const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
    getUsers: getUsers,
    getUser: getUser,
    addUser: addUser,
    getCharacters: getCharacters,
    getCharacter: getCharacter,
    updateCharacter: updateCharacter,
    createCharacter: createCharacter,
    deleteCharacter: deleteCharacter,
    findStat: findStat
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
    return db('characters').where('user_id', id)
}

function getCharacter (id, db = connection) {
    return db('characters').where('id', id)
}

function updateCharacter (id, character, db = connection) {
    return db('characters').where('id', id).update(character)
  }

function createCharacter (character, db = connection) {
    return db('characters').insert(character)
}

function deleteCharacter (id, db = connection) {
    return db('characters').where('id', id).del()
}

function findStat (id, stat, db = connection) {
    return db('characters')
    .where('id', id)
    .then(() => {
        if (stat === 16) {
            mod === 2
        } else if (stat >= 13) {
            mod === 1
        } else if (stat >= 9) {
            mod === 0
        } else if (mod === 8) {
            mod === (-1)
        }
    })
}