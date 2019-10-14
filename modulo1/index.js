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

server.get('/users', (req, res) => {
  return res.json(users);
});

server.get('/users/:index', (req, res) => {
  const { index } = req.params;
  return res.json(users[index]);
});

server.post('/users', (req, res) => {
  const { name } = req.body;
  users.push(name);
  return res.json(users);
});

server.put('/users/:index', (req, res) => {
  const { name } = req.body;
  const { index } = req.params;

  users[index] = name;
  return res.json(users);
});

server.delete('/users/:index', (req, res) => {
  // Deleta uma posição
  const { index } = req.params;
  users.splice(index, 1);
  return res.send();
})

server.listen(3000);