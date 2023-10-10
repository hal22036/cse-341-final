const express = require('express');
const router = express.Router();

const lunchController = require('../controllers/lunch');
const validation = require('../middleware/validate');
const auth = require('../middleware/authenticate.js');

router.get('/', lunchController.getAll);
router.get('/:id', lunchController.getSingle);

router.post('/', lunchController.createLunch);

router.put('/:id', lunchController.updateLunch);

router.delete('/:id', lunchController.deleteLunch);

module.exports = router;