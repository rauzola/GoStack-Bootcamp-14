import React from 'react';

import Header from './components/Header';

/**
 * Componente
 * Propriedade
 * Estado
 */

function App() {
  return (
    <>
      <Header title="Homepage" >
        <ul>
          <li>Homepage</li>
          <li>Projects</li>
        </ul>
      </Header>
      <Header title="Projects" >
        <ul>
          <li>Homepage</li>
          <li>projects</li>
          <li>login</li>
        </ul>
      </Header>
    </>
  );
}

export default App;