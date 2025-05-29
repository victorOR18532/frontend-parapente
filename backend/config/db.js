const mysql = require('mysql2');
require('dotenv').config();

const db = mysql.createConnection({
  host:'localhost',
  port: 3306,  // Puerto por defecto
  user: 'root',  // Usuario por defecto
  password: 'Sur98gpt03',  // Tu contraseña personalizada
  database:  'BDtema' // La base de datos que creaste
});

db.connect((err) => {
  if (err) {
    console.error('Error de conexión a la base de datos:', err);
    return;
  }
  console.log('✅ Conectado a la base de datos MySQL');
});

module.exports = db;
