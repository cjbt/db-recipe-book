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
        {
          id: 2,
          name: 'gordon1 ramsey',
          instructions: 'do stuff',
          dishes_id: 1
        },
        {
          id: 3,
          name: 'gordon2 ramsey',
          instructions: 'do stuff',
          dishes_id: 1
        },
        {
          id: 4,
          name: 'gordon3 ramsey',
          instructions: 'do stuff',
          dishes_id: 1
        },
        {
          id: 5,
          name: 'gordon4 ramsey',
          instructions: 'do stuff',
          dishes_id: 1
        },
        {
          id: 6,
          name: 'gordon5 ramsey',
          instructions: 'do stuff',
          dishes_id: 1
        },
        { id: 7, name: 'grannys1', instructions: 'do stuff', dishes_id: 2 },
        { id: 8, name: 'grannys2', instructions: 'do stuff', dishes_id: 2 },
        { id: 9, name: 'grannys', instructions: 'do stuff', dishes_id: 2 },
        { id: 10, name: 'grannys3', instructions: 'do stuff', dishes_id: 2 },
        { id: 11, name: 'grannys4', instructions: 'do stuff', dishes_id: 2 },
        { id: 12, name: 'grannys5', instructions: 'do stuff', dishes_id: 2 },
        {
          id: 14,
          name: 'los angeles1',
          instructions: 'do stuff',
          dishes_id: 3
        },
        {
          id: 15,
          name: 'los angeles2',
          instructions: 'do stuff',
          dishes_id: 3
        },
        { id: 16, name: 'los angeles3', instructions: 'do stuff', dishes_id: 3 }
      ]);
    });
};
