
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {id: 1, username: 'fismanjohn', password:'gusbyvan42069',status:'I am the creator of this platform, knower of bicycle things, and helper of anyone who will listen.'},
      ]);
    });
};
