import Joi from 'joi';

export function joiTemplateValidator(body) {
  const schema = Joi.object({
    one: Joi.string().email().min(3).required(),
    two: Joi.string().min(6).max(20).required(),
    three: Joi.string().valid('tr', 'en').required(),
    four: Joi.string().min(4).required(),
    five: Joi.number().required()
  });
  return schema.validate(body);
}