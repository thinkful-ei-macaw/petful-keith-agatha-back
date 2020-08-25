const express = require('express');
const json = require('body-parser').json();

const People = require('./people.service');

const router = express.Router();

router.get('/', (req, res) => {
  return res.json(People.get());
});

router.post('/', json, (req, res) => {
  if (!req.body.name) {
    res.status(400, 'name required');}
  else {
    People.enqueue(req.body.name);
    res.status(201).end();}
});

module.exports = router;
