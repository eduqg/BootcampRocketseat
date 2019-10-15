const express = require('express');

const server = express();

server.use(express.json());

const projects = [
  { id: "1", title: 'Instarocket', tasks: [] },
  { id: "2", title: 'Tindev', tasks: [] },
  { id: "3", title: 'Aircnc', tasks: [] },
  { id: "4", title: 'GoStack', tasks: [] }
]

let number_requisitions = 0;

server.use((req, res, next) => {
  number_requisitions++;
  console.log(number_requisitions);
  next();
});

function checkIfProjectExists(req, res, next) {
  const project_found_id = projects.findIndex(item => item.id === req.params.id);

  if (project_found_id < 0) {
    return res.json("Esse projeto não existe");
  }

  req.project_found_id = project_found_id;

  return next();
}

server.get('/projects', (req, res) => {
  return res.json(projects);
});

server.post('/projects', (req, res) => {
  const { id, title } = req.body;
  const new_project = { id, title, tasks: [] };

  projects.push(new_project);

  return res.json(projects);
});

server.put('/projects/:id', checkIfProjectExists, (req, res) => {
  const { title } = req.body;

  projects[req.project_found_id].title = title;

  return res.json(projects);
});

server.delete('/projects/:id', checkIfProjectExists, (req, res) => {
  projects.splice(req.project_found_id, 1);

  return res.json(projects);
});

server.post('/projects/:id/tasks', checkIfProjectExists, (req, res) => {
  const { title } = req.body;

  projects[req.project_found_id].tasks.push(title);

  return res.json(projects);

});

server.listen(3333);