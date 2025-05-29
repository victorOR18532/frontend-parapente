const db = require('../config/db');

const Usuario = {
  getAll: (cb) => db.query('SELECT * FROM usuario', cb),
  getById: (id, cb) => db.query('SELECT * FROM usuario WHERE id_usuario = ?', [id], cb),
  create: (data, cb) => db.query('INSERT INTO usuario SET ?', data, cb),
  update: (id, data, cb) => db.query('UPDATE usuario SET ? WHERE id_usuario = ?', [data, id], cb),
  delete: (id, cb) => db.query('DELETE FROM usuario WHERE id_usuario = ?', [id], cb)
};

module.exports = Usuario;
