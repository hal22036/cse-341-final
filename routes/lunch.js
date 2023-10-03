const express = require('express');
const router = express.Router();

const lunchController = require('../controllers/lunch');
const validation = require('../middleware/validate');
const auth = require('../middleware/authenticate.js');

router.get('/', lunchController.getAll);
router.get('/:id', lunchController.getSingle);

// router.post('/', auth.isAuthenticated, validation.saveLunch, lunchController.createLunch);

// router.put('/:id', auth.isAuthenticated, validation.saveLunch, lunchController.updateLunch);

// router.delete('/:id', auth.isAuthenticated, lunchController.deleteLunch);

module.exports = router;