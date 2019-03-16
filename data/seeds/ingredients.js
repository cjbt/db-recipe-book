exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('ingredients').insert([
        { id: 1, name: 'dough' },
        { id: 2, name: 'noodle' },
        { id: 3, name: 'carnitas' }
      ]);
    });
};
