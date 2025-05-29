const db = require('../config/db');

const Instructor = {
  getAll: (callback) => {
    db.query('SELECT * FROM instructor', callback);
  },

  getById: (id, callback) => {
    db.query('SELECT * FROM instructor WHERE id_instructor = ?', [id], callback);
  },

  create: (data, callback) => {
    db.query('INSERT INTO instructor SET ?', data, callback);
  },

  update: (id, data, callback) => {
    db.query('UPDATE instructor SET ? WHERE id_instructor = ?', [data, id], callback);
  },

  delete: (id, callback) => {
    db.query('DELETE FROM instructor WHERE id_instructor = ?', [id], callback);
  }
};

module.exports = Instructor;
