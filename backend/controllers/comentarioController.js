const Comentario = require('../models/comentarioModel');

exports.getComentarios = (req, res) => {
  Comentario.getAll((err, data) => {
    if (err) return res.status(500).json({ error: err });
    res.json(data);
  });
};

exports.getComentario = (req, res) => {
  Comentario.getById(req.params.id, (err, data) => {
    if (err) return res.status(500).json({ error: err });
    if (data.length === 0) return res.status(404).json({ message: "Comentario no encontrado" });
    res.json(data[0]);
  });
};

exports.createComentario = (req, res) => {
  Comentario.create(req.body, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.status(201).json({ message: "Comentario creado", id: result.insertId });
  });
};

exports.updateComentario = (req, res) => {
  Comentario.update(req.params.id, req.body, (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: "Comentario actualizado" });
  });
};

exports.deleteComentario = (req, res) => {
  Comentario.delete(req.params.id, (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: "Comentario eliminado" });
  });
};
