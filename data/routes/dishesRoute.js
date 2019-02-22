const db = require('../models/dishModel');
const express = require('express');
const route = express.Router();

route.get('/', (req, res) => {
  db.getDishes()
    .then(dish => {
      res.status(200).json(dish);
    })
    .catch(err => res.status(500).json(err));
});

route.post('/', (req, res) => {
  const { name } = req.body;
  if (!name) {
    res.status(404).json({ message: 'you need a name there, bud' });
  }
  db.addDish({ name })
    .then(added => {
      res.status(200).json(added);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

route.get('/:id', (req, res) => {
  const id = req.params.id;
  db.getDish(id)
    .then(dish => {
      if (dish) {
        res.status(200).json(dish);
      } else {
        res.status(404).json({ message: 'you need a name there bud' });
      }
    })
    .catch(err => res.status(500).json(err));
});

module.exports = route;
