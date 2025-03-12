const express = require('express');
const app = express();
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');

connectDB();

// Middlewares
app.use(express.json()); // Para o body em JSON

// Rota de usuários
app.use('/api', userRoutes);

app.listen(5000, () => {
  console.log('Servidor rodando na porta 5000');
});

