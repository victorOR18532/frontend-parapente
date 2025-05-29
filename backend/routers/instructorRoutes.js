const express = require('express');
const router = express.Router();
const instructorController = require('../controllers/instructorController');

router.get('/', instructorController.getInstructores);
router.get('/:id', instructorController.getInstructor);
router.post('/', instructorController.createInstructor);
router.put('/:id', instructorController.updateInstructor);
router.delete('/:id', instructorController.deleteInstructor);

module.exports = router;
