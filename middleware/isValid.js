const Joi = require('joi')

//schema
const menuSchema = Joi.object({
  mainDish: Joi.string()
  .required()
  .min(3)
  .max(50)
  .error(new Error('Not valid dish.')),
  recipe: {
    item1: Joi.string()
    .required()
    .min(3)
    .max(50)
    .error(new Error('Not valid item.')),
    item2: Joi.string()
    .required()
    .min(3)
    .max(50)
    .error(new Error('Not valid item.')),
    item3: Joi.string()
    .required()
    .min(3)
    .max(50)
    .error(new Error('Not valid item.')),
    item4: Joi.string()
    .required()
    .min(3)
    .max(50)
    .error(new Error('Not valid item.'))
  },
  category: Joi.string()
  .required()
  .min(3)
  .max(50)
  .error(new Error('Not valid category.'))
})

// validations
const validateMenu = (req, res, next) => {
  if (req.body.mainDish && req.body.recipe && req.body.category) {
    const { error } = menuSchema.validate(req.body)
    if (error) {
      return res.status(400).json({
        status: "error",
        message: error.message
      })
    }    
  }
  next()
}

module.exports = validateMenu