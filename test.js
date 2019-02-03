const Joi = require ('joi');
const schema = {
  a: string,
};
const {error, value} = Joi.validate ({a: 'a string'}, schema);
console.log(error);
console.log(value);

