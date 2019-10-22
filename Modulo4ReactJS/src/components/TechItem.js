import React from 'react';
import PropTypes from 'prop-types';

export default function TechItem({ tech, onDelete }) {
  return (
    <li key={tech}>
      {tech}
      <button onClick={() => onDelete(tech)} type="button">Remover</button>
    </li>
  );
}

// defaultProps preenche atributos caso não tenha sido passado como argumento
TechItem.defaultProps = {
  tech: 'Oculto',
};

// Proptypes = em um cenário onde o desenvolvedor passa para um camponente um atributo incorreto
// Erro deve ser apontado.
// Posso colocar isRequired, onDelete é necessário.
// tech não é required pois caso o desenvolvedor esqueça de colocar, o defaultProps irá atribuir valor oculto
TechItem.propTypes = {
  tech: PropTypes.string,
  onDelete: PropTypes.func.isRequired,
}