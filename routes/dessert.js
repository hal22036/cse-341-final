const express = require('express');
const router = express.Router();

const dessertController = require('../controllers/dessert');
const validation = require('../middleware/validate');
const auth = require('../middleware/authenticate.js');

router.get('/', dessertController.getAll);
router.get('/:id', dessertController.getSingle);

router.post('/', dessertController.createDessert);

router.put('/:id',dessertController.updateDessert);

router.delete('/:id', dessertController.deleteDessert);

module.exports = router;