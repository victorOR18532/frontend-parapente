const express = require('express');
const router = express.Router();
const inscripcionController = require('../controllers/inscripcionController');

router.get('/', inscripcionController.getInscripciones);
router.get('/:id', inscripcionController.getInscripcion);
router.post('/', inscripcionController.createInscripcion);
router.put('/:id', inscripcionController.updateInscripcion);
router.delete('/:id', inscripcionController.deleteInscripcion);

module.exports = router;
