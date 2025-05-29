const db = require('../config/db');

const Comentario = {
  getAll: (cb) => db.query('SELECT * FROM comentario', cb),
  getById: (id, cb) => db.query('SELECT * FROM comentario WHERE id_comentario = ?', [id], cb),
  create: (data, cb) => db.query('INSERT INTO comentario SET ?', data, cb),
  update: (id, data, cb) => db.query('UPDATE comentario SET ? WHERE id_comentario = ?', [data, id], cb),
  delete: (id, cb) => db.query('DELETE FROM comentario WHERE id_comentario = ?', [id], cb)
};

module.exports = Comentario;
