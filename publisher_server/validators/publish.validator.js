const Joi = require('joi');

const PublishSchema = Joi.object({
  msg: Joi.string().required(),
});


const validatePublishString = async (data) => {
  let { error, value } = await PublishSchema.validate(data);
  return { err: error, value };
};

module.exports = { validatePublishString }