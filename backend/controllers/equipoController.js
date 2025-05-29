const Equipo = require('../models/equipoModel');

exports.getEquipos = (req, res) => {
  Equipo.getAll((err, data) => {
    if (err) return res.status(500).json({ error: err });
    res.json(data);
  });
};

exports.getEquipo = (req, res) => {
  Equipo.getById(req.params.id, (err, data) => {
    if (err) return res.status(500).json({ error: err });
    if (data.length === 0) return res.status(404).json({ message: 'Equipo no encontrado' });
    res.json(data[0]);
  });
};

exports.createEquipo = (req, res) => {
  Equipo.create(req.body, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.status(201).json({ message: 'Equipo creado', id: result.insertId });
  });
};

exports.updateEquipo = (req, res) => {
  Equipo.update(req.params.id, req.body, (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'Equipo actualizado' });
  });
};

exports.deleteEquipo = (req, res) => {
  Equipo.delete(req.params.id, (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'Equipo eliminado' });
  });
};
