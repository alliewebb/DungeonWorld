
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('characters').del()
    .then(function () {
      // Inserts seed entries
      return knex('characters').insert([
        {id: 1, user_id: '1', char_name: 'aPaladin', class: 'paladin', level: 1, armour: 0, xp: 0, max_hp: 21, hp: '21', damage: 'D10', strength: 16, dexterity: 15, constitution: 13, intelligence: 12, wisdom: 9, charisma: 8},
        {id: 2, user_id: '2', char_name: 'aBarbarian', class: 'barbarian', level: 1, xp: 0, hp: ''},
        {id: 3, user_id: '3', char_name: 'aThief', class: 'thief', level: 1, xp: '0', hp: ''}
      ]);
    });
};
