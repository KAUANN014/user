const express = require('express');
const router = express.Router();
const User = require('../models/Users');

// Rota para buscar todos os usuários
router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: 'Erro ao buscar usuários', error: err });
  }
});

router.post('/users', async (req, res) => {
    const { email, password } = req.body;
  
    try {
      // Verifica se o usuário já existe
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ error: 'Usuário já existe' });
      }
  
      // Criação do novo usuário
      const newUser = new User({
        email,
        password,
      });
  
      // Salvando no banco de dados
      await newUser.save();
  
      res.status(201).json({ message: 'Usuário criado com sucesso', user: newUser });
    } catch (err) {
      res.status(500).json({ error: 'Erro ao criar usuário' });
    }
  });
  
  module.exports = router;