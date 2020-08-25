const express = require('express');
const json = require('body-parser').json();

const Pets = require('./pets.service');
const People = require('../people/people.service');

const router = express.Router();

router.get('/', (req, res) => {
  return res.json(Pets.get());
});

router.delete('/', json, (req, res) => {
  if (req.body.type !== 'cat' && req.body.type !== 'dog') {
    res.status(400, 'That is not a cat or dog');}
  Pets.dequeue(req.body.type);
  People.dequeue();
  res.status(200).end();
});

router.get('/all', json, (req, res) => {
  return res.json(Pets.getAll());
});


module.exports = router;
