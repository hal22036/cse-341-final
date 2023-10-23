const express = require('express');
const router = express.Router();

const dessertController = require('../controllers/dessert');
const auth = require('../middleware/authenticate.js');
const { validateDessert } = require("../middleware/isValid")

router.get('/', dessertController.getAll);
router.get('/:id', dessertController.getSingle);

router.post('/', auth.isAuthenticated, validateDessert, dessertController.createDessert);

router.put('/:id', auth.isAuthenticated, validateDessert, dessertController.updateDessert);

router.delete('/:id', auth.isAuthenticated, dessertController.deleteDessert);

module.exports = router;