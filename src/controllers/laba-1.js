const { successRes } = require('@utils/res-builder');

const methodA = (_req, res) => {
  successRes(res);
};

module.exports = {
  methodA,
};
