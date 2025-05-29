const db = require('../config/db');

const Equipo = {
  getAll: (cb) => db.query('SELECT * FROM equipo', cb),
  getById: (id, cb) => db.query('SELECT * FROM equipo WHERE id_equipo = ?', [id], cb),
  create: (data, cb) => db.query('INSERT INTO equipo SET ?', data, cb),
  update: (id, data, cb) => db.query('UPDATE equipo SET ? WHERE id_equipo = ?', [data, id], cb),
  delete: (id, cb) => db.query('DELETE FROM equipo WHERE id_equipo = ?', [id], cb)
};

module.exports = Equipo;
