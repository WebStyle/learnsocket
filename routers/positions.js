var express = require('express');
var router = express.Router();
var Positions = require('../models/positions');

/**
 * GET home page.
 */
router.get('/', function(req, res, next) {
  Positions.find(function(err, positions) {
    if (err) return res.json(err);
    res.json(positions);
  });
});

/**
 * create a new position.
 */
router.post('/create', function(req, res, next) {
  var shift = new Positions(req.body);
  shift.save(function(err) {
    if (err) return res.json(err);
    res.send('Success');
  });
});

module.exports = router;
