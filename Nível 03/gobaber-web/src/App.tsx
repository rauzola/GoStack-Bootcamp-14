import React from 'react';

import SingnIn from './pages/SignIn';
// import SingnUp from './pages/SignUp';
import GlobalStyles from './styles/global';

import { AuthProvider } from './context/AuthContext';

const App: React.FC = () => (
  <>
    <AuthProvider>
      <SingnIn />
    </AuthProvider>

    <GlobalStyles />
  </>
);

export default App;
