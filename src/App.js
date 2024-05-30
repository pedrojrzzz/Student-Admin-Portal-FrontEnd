import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import store from './store/store';
import Router from './routes';
import Header from './components/Header/Header';
import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Router />
          <GlobalStyles />
          <ToastContainer autoClose={2000} className="toast-container" />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
