const express = require('express');
const router = new express.Router();

const controller = require('@controllers/laba-1');
const validate = require('@middleware/validate');

router.route('/method_a')
  .get(validate('randomA'), controller.methodA);

router.route('/method_b')
  .get(validate('randomB'), controller.methodB);

module.exports = router;
