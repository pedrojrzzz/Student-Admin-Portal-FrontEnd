import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import { MantineProvider } from '@mantine/core';
import store from './redux/store/store';
import Router from './routes';
import GlobalStyles from './styles/GlobalStyles';
import { InjectFonts } from './components/InjectFonts/InjectFonts';

function App() {
  return (
    <div>
      <MantineProvider>
        <Provider store={store}>
          <BrowserRouter>
            <Router />
            <InjectFonts />
            <GlobalStyles />
            <ToastContainer
              limit={1} // Permite apenas 1 toast por vez
              autoClose={2000}
              className="toast-container"
            />
          </BrowserRouter>
        </Provider>
      </MantineProvider>
    </div>
  );
}

export default App;
