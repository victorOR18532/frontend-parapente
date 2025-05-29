const db = require('../config/db');

const Evento = {
  getAll: (callback) => {
    db.query('SELECT * FROM evento', callback);
  },

  getById: (id, callback) => {
    db.query('SELECT * FROM evento WHERE id_evento = ?', [id], callback);
  },

  create: (evento, callback) => {
    db.query('INSERT INTO evento SET ?', evento, callback);
  },

  update: (id, evento, callback) => {
    db.query('UPDATE evento SET ? WHERE id_evento = ?', [evento, id], callback);
  },

  delete: (id, callback) => {
    db.query('DELETE FROM evento WHERE id_evento = ?', [id], callback);
  }
};

module.exports = Evento;
