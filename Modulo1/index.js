const express = require('express');

const server = express();

server.use(express.json());

// Query params = ?teste=1
// Route params = /users/1
// Request body = {"name": "Eduardo", "email": "some@email.com"}7

const users = ['Eduardo', 'Diego', 'Vitor'];

// Middleware global
// Posso dar um return para interromper a execução
server.use((req, res, next) => {
  console.time('Request');
  console.log(`Método: ${req.method}; URL: ${req.url}`);
  next();
  console.timeEnd('Request');
});

function checkUserExists(req, res, next) {
  // Se não tem um usuário na requisição
  if (!req.body.name) {
    return res.status(400).json({ err: 'User name is required' });
  }
  return next();
}

function checkUserInArray(req, res, next) {
  const user = users[req.params.index]

  if (!user) {
    return res.status(400).json({ err: 'User does not exists' });
  }

  // Agora toda requisição, após a execução desse método, terá o nome do usuário em req
  req.user = user;

  return next();
}

server.get('/users', (req, res) => {
  return res.json(users);
});

server.get('/users/:index', checkUserInArray, (req, res) => {
  // Essa informação de user foi obtida em checkUserInArray
  return res.json(req.user);
});

server.post('/users', checkUserExists, (req, res) => {
  const { name } = req.body;
  users.push(name);
  
  return res.json(users);
});

server.put('/users/:index', checkUserExists, checkUserInArray, (req, res) => {
  const { name } = req.body;
  const { index } = req.params;

  users[index] = name;
  return res.json(users);
});

server.delete('/users/:index', checkUserInArray, (req, res) => {
  // Deleta uma posição
  const { index } = req.params;
  users.splice(index, 1);
  return res.send();
})

server.listen(3000);