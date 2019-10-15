const express = require('express');

const server = express();

server.use(express.json());

const projects = [
  { id: "1", title: 'Instarocket', tasks: [] },
  { id: "2", title: 'Tindev', tasks: [] },
  { id: "3", title: 'Aircnc', tasks: [] },
  { id: "4", title: 'GoStack', tasks: [] }
]

server.get('/projects', (req, res) => {
  return res.json(projects);
});

server.post('/projects', (req, res) => {
  const { id, title } = req.body;
  const new_project = { id, title, tasks: [] };

  projects.push(new_project);

  return res.json(projects);
});

server.listen(3333);