const errors = new Map();

errors.set(73500, 'Internal server error.');

const successRes = (res, data) => res.json(Object.assign({
  status: 'success',
}, data));
const errorRes = (res, status, code, error) => res.status(status).json({
  status: 'error',
  code,
  message: errors.get(code),
  error,
});

module.exports = {
  successRes,
  errorRes,
};
