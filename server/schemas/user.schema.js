const Joi = require("joi");

const SaveUserSchema = Joi.object({
  id: Joi.string().required(),
  favoriteImage: Joi.string().required(),
});
module.exports = { SaveUserSchema };
