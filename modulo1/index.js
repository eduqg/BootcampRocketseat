const express = require('express');

const server = express();

// Query params = ?teste=1
// Route params = /users/1
// Request body = {"name": "Eduardo", "email": "some@email.com"}7

const users = ['Eduardo', 'Diego', 'Vitor'];

server.get('/users/:index', (req, res) => {
  const { index } = req.params;
  return res.json(users[index]);
});

server.listen(3000);