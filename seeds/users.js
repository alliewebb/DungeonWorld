
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, name: 'Matt'},
        {id: 2, name: 'Sarah'},
        {id: 3, name: 'Dan'}
      ])
    })
}
