const Joi = require('joi');

const SubscribeSchema = Joi.object({
  url: Joi.string().required(),
});


const validateSubscribeUrl = async (data) => {
  let { error, value } = await SubscribeSchema.validate(data);
  return { err: error, value };
};

module.exports = { validateSubscribeUrl }