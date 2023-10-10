const express = require('express');
const router = express.Router();

const dessertController = require('../controllers/dessert');
const validation = require('../middleware/validate');
const auth = require('../middleware/authenticate.js');

router.get('/', dessertController.getAll);
router.get('/:id', dessertController.getSingle);

router.post('/', auth.isAuthenticated, validation.saveDessert, dessertController.createDessert);

router.put('/:id', auth.isAuthenticated, validation.saveDessert, dessertController.updateDessert);

router.delete('/:id', auth.isAuthenticated, dessertController.deleteDessert);

module.exports = router;