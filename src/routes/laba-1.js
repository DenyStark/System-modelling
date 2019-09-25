const express = require('express');
const router = new express.Router();

const controller = require('@controllers/laba-1');

router.route('/method_a')
  .get(controller.methodA);

module.exports = router;
