var express = require('express');
var router = express.Router();
var Shifts = require('../models/shifts');

/**
 * getAll shifts list
 */
router.get('/', function(req, res, next) {
  Shifts.find(function(err, shifts) {
    if (err) return res.json(err);
    res.json(shifts);
  });
});

// get shift by id
router.get('/:id/', function(req, res, next) {
  if (!req.params.id) return res.send('ID requried');
  Shifts.findOne({
    id: req.params.id
  }, function(err, response) {
    if (err) return res.json(err);

    res.json(response);
  });
});

// create shift
router.post('/create', function(req, res, next) {
  var shift = new Shifts(req.body);
  shift.save(function(err) {
    if (err) return res.json(err);
    res.send('Success');
  });
});

// update shift
router.put('/:id/', function(req, res, next) {
  // id parametr bo'lmasa
  if (!req.body) return res.send('BODY is null');

  Shifts.update({
    id: req.params.id
  }, {
    $set: req.body
  }, function(err, shift) {
    if (err) return res.json(err);

    res.json(shift);
  });

});


module.exports = router;
