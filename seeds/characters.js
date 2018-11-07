
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('characters').del()
    .then(function () {
      // Inserts seed entries
      return knex('characters').insert([
        {id: 1, user_id: '1', char_name: 'aPaladin', class: 'paladin', level: '1', xp: '0', hit_points: ''},
        {id: 2, user_id: '2', char_name: 'aBarbarian', class: 'barbarian', level: '1', xp: '0', hit_points: ''},
        {id: 3, user_id: '3', char_name: 'aThief', class: 'thief', level: '1', xp: '0', hit_points: ''}
      ]);
    });
};
