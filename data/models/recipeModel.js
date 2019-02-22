const db = require('../dbConfig');

const getRecipes = () => {
  return db('recipes as r')
    .select(
      'r.id',
      'r.name',
      'd.name as dishName',
      'r.instructions',
      'r.created_at',
      'r.updated_at'
    )
    .join('dishes as d', 'd.id', 'r.dishes_id');
};

module.exports = {
  getRecipes
};
