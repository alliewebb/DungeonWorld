
exports.up = function(knex, Promise) {
    return knex.schema.createTable('characters', (table) => {
        table.increments('id').primary()
        table.integer('user_id')
        table.string('char_name')
        table.string('class')
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
    })
}

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('characters')
    }
