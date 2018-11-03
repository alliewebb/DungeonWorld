
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.string('class')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users')
}
