var express = require('express');
var router = express.Router();
var Staff = require('../models/staff');

/**
 * GET staff list.
 */
router.get('/', function(req, res, next) {
  Staff.find(function(err, staffs) {
    if (err) return res.json(err);

    res.json(staffs);
  });
});

/**
 * Get staff by Id
 */
router.get('/:id', function(req, res, next) {
  // ID parametr bor yoki yo'qligini tekshiramiz
  if (!req.param.id) return res.send('ID required');

  Staff.find({
    id: req.param.id
  }, function(err, staff) {
    if (err) return res.json(err);

    res.json(staff);
  });
});

router.post('/create', function(req, res, next) {
  if (!req.body.name && !req.body.id) return res.send('Name and ID required');
  var staff = new Staff(req.body);
  staff.save(function(err) {
    if (err) return res.json(err);
    res.send('SUCCESS');
  });
});

module.exports = router;
