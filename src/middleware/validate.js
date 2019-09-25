const Joi = require('@hapi/joi');

const templates = {
  integer: Joi.number().integer(),
  number: Joi.number(),
};

const schemas = {
  randomA: Joi.object().keys({
    count: templates.integer.required(),
    l: templates.number.required(),
  }),
  randomB: Joi.object().keys({
    count: templates.integer.required(),
    a: templates.number.required(),
    b: templates.number.required(),
  }),
  randomC: Joi.object().keys({
    count: templates.integer.required(),
    a: templates.number.required(),
    c: templates.number.required(),
  }),
};

const validate = (type, isQuery = true) => (req, res, next) => {
  const schema = schemas[type];
  const data = (isQuery) ? req.query : req.body;

  const { error } = Joi.validate(data, schema);

  if (error) return res.status(422).json({
    status: 'error',
    message: error.details,
  });

  next();
};

module.exports = validate;
