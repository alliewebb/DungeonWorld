exports.up = function (knex, Promise) {
  return knex.schema.createTable('characters', (table) => {
    table.increments('id').primary()
    table.integer('user_id')
      .references('users.id')
      .onUpdate('CASCADE')
    table.string('char_name')
    table.string('class')
    table.string('race')
    table.string('alignment')
    table.integer('level')
    table.integer('armour')
    table.integer('xp')
    table.integer('max_hp')
    table.integer('hp')
    table.string('damage')
    table.integer('strength')
    table.integer('dexterity')
    table.integer('constitution')
    table.integer('intelligence')
    table.integer('wisdom')
    table.integer('charisma')
    table.string('items')
    table.string('bonds')
    table.string('notes')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('characters')
}
