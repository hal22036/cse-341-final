const Joi = require('joi')

//Menu schema
const menuSchema = Joi.object({
  main_dish: Joi.string()
  .required()
  .min(3)
  .max(50),
  item_1: Joi.string()
  .required()
  .min(3)
  .max(50),
  item_2: Joi.string()
  .required()
  .min(3)
  .max(50),
  item_3: Joi.string()
  .required()
  .min(3)
  .max(50),
  item_4: Joi.string()
  .required()
  .min(3)
  .max(50),
  category: Joi.string()
  .required()
  .min(3)
  .max(50)
})

//Dessert schema
const dessertSchema = Joi.object({
  main_dish: Joi.string()
  .required()
  .min(3)
  .max(50),
  item_1: Joi.string()
  .required()
  .min(3)
  .max(50),
  item_2: Joi.string()
  .required()
  .min(3)
  .max(50),
  item_3: Joi.string()
  .required()
  .min(3)
  .max(50),
  item_4: Joi.string()
  .required()
  .min(3)
  .max(50),
  item_5: Joi.string()
  .required()
  .min(3)
  .max(50),
  item_6: Joi.string()
  .required()
  .min(3)
  .max(50),
  category: Joi.string()
  .required()
  .min(3)
  .max(50)
})


// Dessert validation
const validateMenu = (req, res, next) => {
  if (req.body) {
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

const validateDessert = (req, res, next) => {
  if (req.body) {
    const { error } = dessertSchema.validate(req.body)
    if (error) {
      return res.status(400).json({
        status: "error",
        message: error.message
      })
    }    
  }
  next()
}


module.exports = {
  validateMenu,
  validateDessert  
}