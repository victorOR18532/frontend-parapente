const Usuario = require('../models/usuarioModel');

exports.getUsuarios = (req, res) => {
  Usuario.getAll((err, data) => {
    if (err) return res.status(500).json({ error: err });
    res.json(data);
  });
};

exports.getUsuario = (req, res) => {
  Usuario.getById(req.params.id, (err, data) => {
    if (err) return res.status(500).json({ error: err });
    if (data.length === 0) return res.status(404).json({ message: "Usuario no encontrado" });
    res.json(data[0]);
  });
};

exports.createUsuario = (req, res) => {
  Usuario.create(req.body, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.status(201).json({ message: "Usuario creado", id: result.insertId });
  });
};

exports.updateUsuario = (req, res) => {
  Usuario.update(req.params.id, req.body, (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: "Usuario actualizado" });
  });
};

exports.deleteUsuario = (req, res) => {
  Usuario.delete(req.params.id, (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: "Usuario eliminado" });
  });
};
