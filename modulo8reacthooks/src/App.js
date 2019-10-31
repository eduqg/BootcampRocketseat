import React, { useState, useEffect, useMemo, useCallback } from 'react';

function App() {
  const [tech, setTech] = useState([]);
  const [newTech, setNewTech] = useState('');

  // Problema: toda vez que componente é criado, uma função é criada também. Isso gasta processamente.
  // Exemplo handleAdd
  // Para isso usar o useCallback. Usar em estados, variáveis do useState.
  // retorna função

  // function handleAdd() {
  //   setTech([...tech, newTech]);
  //   setNewTech('');
  // }

  const handleAdd = useCallback(() => {
    setTech([...tech, newTech]);
    setNewTech('');
  }, [tech, newTech]);

  // Para apenas executar na inicialização = componentDidMount
  useEffect(() => {
    const storageTech = localStorage.getItem('tech');

    if (storageTech) {
      setTech(JSON.parse(storageTech));
    }

    // Executa função quando componente deixa de estar montado = componentDidUnount
    return () => {
      // document.removeEventListener();
    };
  }, []);

  // Função executa toda vez que tech alterar = componentDidUpdate
  useEffect(() => {
    localStorage.setItem('tech', JSON.stringify(tech));
  }, [tech]);

  // Chamar tech.length apenas quando tech mudar. Não sempre que componenten renderizar
  // techSize só ganha novo valor quando tech é alterado
  // retorna um valor
  const techSize = useMemo(() => tech.length, [tech]);

  return (
    <>
      <ul>
        {tech.map(t => (
          <li key={t}>{t}</li>
        ))}
      </ul>
      {/* tech.length é executado toda vez que o componente renderiza */}
      {/* <strong>Você tem {tech.length} tecnologias</strong> */}
      <strong>Você tem {techSize} tecnologias</strong>
      <input value={newTech} onChange={e => setNewTech(e.target.value)} />
      <button type="button" onClick={handleAdd}>
        Adicionar
      </button>
    </>
  );
}

export default App;
