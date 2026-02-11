const express = require('express');
const hospitalRoutes = require('./routes/hospital.routes');

const app = express();
app.use(express.json());

app.use('/api/hospitales', hospitalRoutes);
// Middleware para manejar rutas no encontradas
app.use((req, res, next) => {
  res.status(404).json({
    ok: false,
    datos: null,
    mensaje: 'Ruta no encontrada',
  });
});

// Middleware para manejar errores
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({
    ok: false,
    datos: null,
    mensaje: 'Error interno del servidor',
  });
});

module.exports = app;
