import React from 'react';
import { Router } from 'react-router-dom';
// Provider para que toda a aplicação tenha acesso a store
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import './config/ReactotronConfig';

import GlobalStyles from './styles/global';
import Routes from './routes';
import Header from './components/Header';

import history from './services/history';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      {/* React-router-dom agora está ouvindo informações do history
      Qualquer alteração que tiver sido feita no history o router-dom irá saber */}
      <Router history={history}>
        <Header />
        <Routes />
        <GlobalStyles />
        <ToastContainer autoClose={3000} />
      </Router>
    </Provider>
  );
}

export default App;
