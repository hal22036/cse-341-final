const express = require('express');
const router = express.Router();

const dinnerController = require('../controllers/dinner');
const auth = require('../middleware/authenticate.js');
const { validateMenu } = require("../middleware/isValid")

router.get('/', dinnerController.getAll);
router.get('/:id', dinnerController.getSingle);

router.post('/', validateMenu, dinnerController.createDinner);

router.put('/:id', validateMenu, dinnerController.updateDinner);

router.delete('/:id', dinnerController.deleteDinner);

module.exports = router;