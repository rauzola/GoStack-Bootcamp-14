import React from 'react';

import SingnIn from './pages/SignIn';
// import SingnUp from './pages/SignUp';
import GlobalStyles from './styles/global';

import AuthContext from './context/AuthContext';

const App: React.FC = () => (
  <>
    <AuthContext.Provider value={{ name: 'Raul' }}>
      <SingnIn />
    </AuthContext.Provider>

    <GlobalStyles />
  </>
);

export default App;
