const express = require('express');
const router = express.Router();
const comentarioController = require('../controllers/comentarioController');

router.get('/', comentarioController.getComentarios);
router.get('/:id', comentarioController.getComentario);
router.post('/', comentarioController.createComentario);
router.put('/:id', comentarioController.updateComentario);
router.delete('/:id', comentarioController.deleteComentario);

module.exports = router;
