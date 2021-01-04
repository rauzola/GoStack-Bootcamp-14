import React from 'react';

import SingnIn from './pages/SignIn';
// import SingnUp from './pages/SignUp';
import GlobalStyles from './styles/global';

import ToastContainer from './components/ToastContainer';
import { AuthProvider } from './hooks/AuthContext';

const App: React.FC = () => (
  <>
    <AuthProvider>
      <SingnIn />
    </AuthProvider>
    <ToastContainer />

    <GlobalStyles />
  </>
);

export default App;
