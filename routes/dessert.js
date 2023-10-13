const express = require('express');
const router = express.Router();

const dessertController = require('../controllers/dessert');
const auth = require('../middleware/authenticate.js');
const { validateDessert } = require("../middleware/isValid")

router.get('/', dessertController.getAll);
router.get('/:id', dessertController.getSingle);

router.post('/', validateDessert, dessertController.createDessert);

router.put('/:id', validateDessert, dessertController.updateDessert);

router.delete('/:id', dessertController.deleteDessert);

module.exports = router;