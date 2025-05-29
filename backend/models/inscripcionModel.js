const db = require('../config/db');

const Inscripcion = {
  getAll: (cb) => db.query('SELECT * FROM inscripcion', cb),
  getById: (id, cb) => db.query('SELECT * FROM inscripcion WHERE id_inscripcion = ?', [id], cb),
  create: (data, cb) => db.query('INSERT INTO inscripcion SET ?', data, cb),
  update: (id, data, cb) => db.query('UPDATE inscripcion SET ? WHERE id_inscripcion = ?', [data, id], cb),
  delete: (id, cb) => db.query('DELETE FROM inscripcion WHERE id_inscripcion = ?', [id], cb)
};

module.exports = Inscripcion;
