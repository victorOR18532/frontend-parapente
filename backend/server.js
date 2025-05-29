const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/usuarios', require('./routers/usuarioRoutes'));
app.use('/api/eventos', require('./routers/eventoRoutes'));
app.use('/api/inscripciones', require('./routers/inscripcionRoutes'));
app.use('/api/auth', require('./routers/authRoutes'));
app.use('/api/instructores', require('./routers/instructorRoutes'));
app.use('/api/comentarios', require('./routers/comentarioRoutes'));
app.use('/api/equipos', require('./routers/equipoRoutes'));

// Servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});



