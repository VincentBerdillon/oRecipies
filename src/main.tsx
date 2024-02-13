import React from 'react';
import { Provider } from 'react-redux';
// ReactDom permet d'injecter notre application dans le DOM
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import './styles/index.scss';

import store from './store';
import { router } from './routes';

// On crée un root pour l'application
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// On injecte notre application dans le DOM avec le store à dispo de tous les composants
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
