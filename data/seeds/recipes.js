exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('recipes').insert([
        {
          id: 1,
          name: 'gordon ramsey',
          instructions: 'do stuff',
          dishes_id: 1
        },
        { id: 2, name: 'grannys', instructions: 'do stuff', dishes_id: 2 },
        { id: 3, name: 'los angeles', instructions: 'do stuff', dishes_id: 3 }
      ]);
    });
};
