exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipeingredients')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('recipeingredients').insert([
        { id: 1, recipes_id: 1, ingredients_id: 1, quantity: 1 },
        { id: 2, recipes_id: 2, ingredients_id: 2, quantity: 1 },
        { id: 3, recipes_id: 3, ingredients_id: 3, quantity: 1 }
      ]);
    });
};
