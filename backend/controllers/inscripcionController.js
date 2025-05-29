const Inscripcion = require('../models/inscripcionModel');

exports.getInscripciones = (req, res) => {
  Inscripcion.getAll((err, data) => {
    if (err) return res.status(500).json({ error: err });
    res.json(data);
  });
};

exports.getInscripcion = (req, res) => {
  Inscripcion.getById(req.params.id, (err, data) => {
    if (err) return res.status(500).json({ error: err });
    if (data.length === 0) return res.status(404).json({ message: "Inscripción no encontrada" });
    res.json(data[0]);
  });
};

exports.createInscripcion = (req, res) => {
  Inscripcion.create(req.body, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.status(201).json({ message: "Inscripción creada", id: result.insertId });
  });
};

exports.updateInscripcion = (req, res) => {
  Inscripcion.update(req.params.id, req.body, (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: "Inscripción actualizada" });
  });
};

exports.deleteInscripcion = (req, res) => {
  Inscripcion.delete(req.params.id, (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: "Inscripción eliminada" });
  });
};
