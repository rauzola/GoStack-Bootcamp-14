import React from 'react';

import SingnIn from './pages/SignIn';
// import SingnUp from './pages/SignUp';
import GlobalStyles from './styles/global';

import AppProvider from './hooks';

const App: React.FC = () => (
  <>
    <AppProvider>
      <SingnIn />
    </AppProvider>

    <GlobalStyles />
  </>
);

export default App;
