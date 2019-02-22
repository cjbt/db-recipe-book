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
module.exports = route;
