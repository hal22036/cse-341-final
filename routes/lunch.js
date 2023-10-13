const express = require('express');
const router = express.Router();

const lunchController = require('../controllers/lunch');
const auth = require('../middleware/authenticate.js');
const { validateMenu }  = require("../middleware/isValid")

router.get('/', lunchController.getAll);
router.get('/:id', lunchController.getSingle);

router.post('/', validateMenu, lunchController.createLunch);

router.put('/:id', validateMenu, lunchController.updateLunch);

router.delete('/:id', lunchController.deleteLunch);

module.exports = router;