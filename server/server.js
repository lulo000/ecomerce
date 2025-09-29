const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware para leer JSON
app.use(express.json());

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('✅ Backend funcionando!');
});

// Servidor escuchando
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
