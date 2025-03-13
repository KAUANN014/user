require('dotenv').config();  // Carregar variáveis de ambiente
const mongoose = require('mongoose');

const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASSWORD;

// Montando a string de conexão
const mongoURI = `mongodb+srv://${dbUser}:${dbPass}@cluster0.w5er4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Conectar ao MongoDB Atlas
const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('🔥 Conectado ao MongoDB Atlas!');
  } catch (err) {
    console.error('❌ Erro ao conectar ao Atlas:', err);
    process.exit(1); // Finaliza o processo caso não consiga conectar
  }
};

module.exports = connectDB;