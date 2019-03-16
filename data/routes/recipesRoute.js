const db = require('../models/recipeModel');
const express = require('express');
const route = express.Router();

route.get('/', (req, res) => {
  db.getRecipes()
    .then(recipe => {
      res.status(200).json(recipe);
    })
    .catch(err => res.status(500).json(err));
});

route.post('/', (req, res) => {
  const { name, instructions, dishes_id } = req.body;
  // const body = req.body;
  db.addRecipe({ name, instructions, dishes_id })
    .then(results => {
      res.status(201).json(results);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});
module.exports = route;
