const db = require('../dbConfig');

const getDishes = () => {
  return db('dishes');
};

const addDish = dish => {
  return db('dishes')
    .insert(dish)
    .then(id => {
      return getDish(id[0]);
    });
};

const getDish = id => {
  return db('dishes as d')
    .select(
      'd.id as id',
      'd.name as name',
      'r.name as recipe',
      'r.instructions as instructions',
      'd.created_at',
      'd.updated_at'
    )
    .join('recipes as r', 'r.dishes_id', 'd.id')
    .where('d.id', id)
    .then(result => {
      const dish = {
        id: result[0].id,
        name: result[0].name,
        recipes: result.map(item => ({
          recipe: item.recipe,
          instructions: item.instructions
        })),
        created_at: result[0].created_at,
        updated_at: result[0].updated_at
      };
      return dish;
    });
};

module.exports = {
  getDishes,
  addDish,
  getDish
};
