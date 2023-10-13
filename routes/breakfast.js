const express = require('express');
const router = express.Router();

const breakfastController = require('../controllers/breakfast');
const auth = require('../middleware/authenticate.js');
const  { validateMenu } = require("../middleware/isValid")

router.get('/', breakfastController.getAll);
router.get('/:id', breakfastController.getSingle);

router.post('/', validateMenu, breakfastController.createBreakfast);

router.put('/:id', validateMenu, breakfastController.updateBreakfast);

router.delete('/:id', breakfastController.deleteBreakfast);

module.exports = router;