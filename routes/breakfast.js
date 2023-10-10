const express = require('express');
const router = express.Router();

const breakfastController = require('../controllers/breakfast');
const validation = require('../middleware/validate');
const auth = require('../middleware/authenticate.js');

router.get('/', breakfastController.getAll);
router.get('/:id', breakfastController.getSingle);

router.post('/', breakfastController.createBreakfast);

router.put('/:id', breakfastController.updateBreakfast);

router.delete('/:id', breakfastController.deleteBreakfast);

module.exports = router;