const { getRandomA, getRandomB, getRandomC } = require('@utils/laba-1');
const { successRes } = require('@utils/res-builder');

const methodA = (req, res) => {
  const count = parseFloat(req.query.count);
  const l = parseFloat(req.query.l);

  const array = getRandomA(count, l);
  successRes(res, { array });
};

const methodB = (req, res) => {
  const count = parseInt(req.query.count);
  const a = parseFloat(req.query.a);
  const b = parseFloat(req.query.b);

  const array = getRandomB(count, a, b);
  successRes(res, { array });
};

const methodC = (req, res) => {
  const count = parseInt(req.query.count);
  const a = parseFloat(req.query.a);
  const c = parseFloat(req.query.c);

  const array = getRandomC(count, a, c);
  successRes(res, { array });
};

module.exports = {
  methodA,
  methodB,
  methodC,
};
