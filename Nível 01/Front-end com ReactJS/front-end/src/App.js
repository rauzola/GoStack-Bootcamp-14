import React, { useState, useEffect } from 'react';
import api from './services/api';

import Header from './components/Header';

/**
 * Componente
 * Propriedade
 * Estado & Imutabilidade
 */

export default function App() {
  const [projects, setProjects] = useState([]);

  //useState retorna um arry com 2 posições
  //
  // 1. Variavel com seu valor inicial
  // 2. Função para atualizar esse valor

  useEffect(() => {
    api.get('/projects').then(response => {
      setProjects(response.data);
    })
  }, []);

  function handleAddProject() {
    // projects.push(`novo project ${Date.now()}`);

    setProjects([...projects, `novo project ${Date.now()}`]);

    console.log(projects);
  }

  return (
    <>
      <Header title="Projects" />

      <ul>
        {projects.map(project => <li key={project.id}>{project.title}</li>)}
      </ul>

      <button type="button" onClick={handleAddProject}>Adicionar projeto</button>
    </>
  );
}
