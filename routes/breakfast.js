const express = require('express');
const router = express.Router();

const breakfastController = require('../controllers/breakfast');
const auth = require('../middleware/authenticate.js');
const  { validateMenu } = require("../middleware/isValid");

router.get('/', breakfastController.getAll);
router.get('/:id', breakfastController.getSingle);

router.post('/', auth.isAuthenticated, validateMenu, breakfastController.createBreakfast);

router.put('/:id', auth.isAuthenticated, validateMenu, breakfastController.updateBreakfast);

router.delete('/:id', auth.isAuthenticated, breakfastController.deleteBreakfast);

module.exports = router;