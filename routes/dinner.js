const express = require('express');
const router = express.Router();

const dinnerController = require('../controllers/dinner');
const validation = require('../middleware/validate');
const auth = require('../middleware/authenticate.js');

router.get('/', dinnerController.getAll);
router.get('/:id', dinnerController.getSingle);

// router.post('/', auth.isAuthenticated, validation.saveDinner,dinnerController.createDinner);

// router.put('/:id', auth.isAuthenticated, validation.saveDinner,dinnerController.updateDinner);

// router.delete('/:id', auth.isAuthenticated,dinnerController.deleteDinner);

module.exports = router;