const { getRandomA, getRandomB } = require('@utils/laba-1');
const { successRes } = require('@utils/res-builder');

const methodA = (req, res) => {
  const count = parseInt(req.query.count);
  const l = parseInt(req.query.l);

  const array = new Array(count).fill(0).map(() => getRandomA(l));
  successRes(res, { array });
};

const methodB = (req, res) => {
  const count = parseInt(req.query.count);
  const b = parseInt(req.query.b);
  const a = parseInt(req.query.a);

  const array = new Array(count).fill(0).map(() => getRandomB(b, a));
  successRes(res, { array });
};

module.exports = {
  methodA,
  methodB,
};
