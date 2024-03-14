// const Joi = require("joi");

// const SaveUserSchema = Joi.object({
//   userId: Joi.string().required(),
//   favorites: Joi.array()
//     .items(
//       Joi.object({
//         title: Joi.string().required(),
//         link: Joi.string().required(),
//       })
//     )
//     .required(),
// });
// module.exports = { SaveUserSchema };

const Joi = require("joi");

const SaveUserSchema = Joi.object({
  id: Joi.string().required(),
  favoriteImage: Joi.string().required(),
});
module.exports = { SaveUserSchema };
