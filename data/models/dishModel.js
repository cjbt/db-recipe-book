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
    .select('d.id', 'd.name', 'r.name as recipe')
    .join('recipes as r', 'r.dishes_id', 'd.id')
    .where('d.id', id)
    .first();
};

module.exports = {
  getDishes,
  addDish,
  getDish
};
