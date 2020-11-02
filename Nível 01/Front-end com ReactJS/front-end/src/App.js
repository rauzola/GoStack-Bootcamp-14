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

  async function handleAddProject() {
    // setProjects([...projects, `novo project ${Date.now()}`]);

    const response = await api.post('/projects', {
        title: `Novo projeto ${Date.now()}`,
        owner: "Raul Sigoli"
      });

      const project = response.data;

      setProjects([...projects, project]);
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
