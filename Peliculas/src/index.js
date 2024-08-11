const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');

// Rutas
const movieOrBookRoutes = require('./routes/movieOrBookRoutes');

// Configuración de dotenv
dotenv.config();

// Configuración de Express
const app = express();
const PORT = process.env.PORT || 3500;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/Peliculas';

// Conexión a MongoDB
mongoose.connect(MONGO_URI)
    .then(() => console.log('Conectado a MongoDB'))
    .catch((err) => console.error('Error al conectar a MongoDB:', err));

// Middleware para parsear JSON
app.use(express.json());

// Rutas
app.use('/api/items', movieOrBookRoutes);

app.get('/', (req, res) => {
    res.send('API de Libros o Películas');
});

// Escuchar en el puerto
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
