const Evento = require('../models/eventoModel');

exports.getEventos = (req, res) => {
  Evento.getAll((err, data) => {
    if (err) res.status(500).json({ error: err });
    else res.json(data);
  });
};

exports.getEvento = (req, res) => {
  Evento.getById(req.params.id, (err, data) => {
    if (err) res.status(500).json({ error: err });
    else if (data.length === 0) res.status(404).json({ message: "Evento no encontrado" });
    else res.json(data[0]);
  });
};

exports.createEvento = (req, res) => {
  const nuevoEvento = req.body;
  Evento.create(nuevoEvento, (err, result) => {
    if (err) res.status(500).json({ error: err });
    else res.status(201).json({ message: '✅ Evento creado', id: result.insertId });
  });
};

exports.updateEvento = (req, res) => {
  const eventoActualizado = req.body;
  const id = req.params.id;

  Evento.update(id, eventoActualizado, (err) => {
    if (err) res.status(500).json({ error: err });
    else res.json({ message: '📝 Evento actualizado' });
  });
};

exports.deleteEvento = (req, res) => {
  const id = req.params.id;
  Evento.delete(id, (err) => {
    if (err) res.status(500).json({ error: err });
    else res.json({ message: '🗑️ Evento eliminado' });
  });
};
