const Instructor = require('../models/instructorModel');

exports.getInstructores = (req, res) => {
  Instructor.getAll((err, data) => {
    if (err) return res.status(500).json({ error: err });
    res.json(data);
  });
};

exports.getInstructor = (req, res) => {
  Instructor.getById(req.params.id, (err, data) => {
    if (err) return res.status(500).json({ error: err });
    if (data.length === 0) return res.status(404).json({ message: "Instructor no encontrado" });
    res.json(data[0]);
  });
};

exports.createInstructor = (req, res) => {
  Instructor.create(req.body, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.status(201).json({ message: "Instructor creado", id: result.insertId });
  });
};

exports.updateInstructor = (req, res) => {
  Instructor.update(req.params.id, req.body, (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: "Instructor actualizado" });
  });
};

exports.deleteInstructor = (req, res) => {
  Instructor.delete(req.params.id, (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: "Instructor eliminado" });
  });
};
