// routers/authRoutes.js
const express = require('express');
const router = express.Router();
const db = require('../config/db');
//const db = require('../db'); // importa tu conexión
const jwt = require('jsonwebtoken'); // si usarás JWT
const secret = process.env.JWT_SECRET;  // pon esto en un .env en producción

router.post('/login', async (req, res) => {
  const { correo, contraseña } = req.body;

  try {
    const [usuarios] = await db.query('SELECT * FROM usuario WHERE correo = ?', [correo]);

    if (usuarios.length === 0) {
      return res.status(404).json({ mensaje: 'Usuario no encontrado' });
    }

    const usuario = usuarios[0];

    if (usuario.contraseña !== contraseña) {
      return res.status(401).json({ mensaje: 'Contraseña incorrecta' });
    }

    const token = jwt.sign(
      { id: usuario.id_usuario, correo: usuario.correo },
      secret,
      { expiresIn: '2h' }
    );

    res.json({
      mensaje: 'Inicio de sesión exitoso',
      token,
      usuario: {
        id: usuario.id_usuario,
        nombre: usuario.nombre,
        correo: usuario.correo,
      },
    });
  } catch (error) {
    console.error('Error al iniciar sesión:', error);
    res.status(500).json({ mensaje: 'Error en el servidor' });
  }
});

