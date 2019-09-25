const { getRandomA } = require('@utils/laba-1');
const { successRes } = require('@utils/res-builder');

const methodA = (req, res) => {
  const { count, l } = req.query;
  const numbers = new Array(parseInt(count)).fill(0).map(e => getRandomA(l));
  successRes(res, { numbers });
};

module.exports = {
  methodA,
};
