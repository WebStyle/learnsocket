var express = require('express');
var router = express.Router();
var Shifts = require('../models/shifts');

/* GET home page. */
router.get('/', function(req, res, next) {
  Shifts.find(function(err, shifts) {
    if(err) return res.json(err);
    res.json(shifts);
  });
});

router.get('/:id', function(req, res, next) {
  Shifts.find({id:req.params.id}, function(err, shift) {
    if(err) return res.json(err);
    res.json(shift);
  });
});

router.post('/create', function(req, res, next) {
  var shift = new Shifts(req.body);
  shift.save(function(err) {
    if(err) return res.json(err);
    res.send('Success');
  });
});


module.exports = router;
