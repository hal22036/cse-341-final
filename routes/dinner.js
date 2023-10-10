const express = require('express');
const router = express.Router();

const dinnerController = require('../controllers/dinner');
const validation = require('../middleware/validate');
const auth = require('../middleware/authenticate.js');

router.get('/', dinnerController.getAll);
router.get('/:id', dinnerController.getSingle);

router.post('/', dinnerController.createDinner);

router.put('/:id', dinnerController.updateDinner);

router.delete('/:id', dinnerController.deleteDinner);

module.exports = router;