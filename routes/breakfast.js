const express = require('express');
const router = express.Router();

const breakfastController = require('../controllers/breakfast');
const validation = require('../middleware/validate');
const auth = require('../middleware/authenticate.js');

router.get('/', breakfastController.getAll);
router.get('/:id', breakfastController.getSingle);

// router.post('/', auth.isAuthenticated, validation.saveBreakfast, breakfastController.createBreakfast);

// router.put('/:id', auth.isAuthenticated, validation.saveBreakfast, breakfastController.updateBreakfast);

// router.delete('/:id', auth.isAuthenticated, breakfastController.deleteBreakfast);

module.exports = router;