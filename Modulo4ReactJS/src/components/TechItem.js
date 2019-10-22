import React from 'react';

export default function TechItem({ tech, onDelete }) {
  return (
    <li key={tech}>
      {tech}
      <button onClick={() => onDelete(tech)} type="button">Remover</button>
    </li>
  );
}
