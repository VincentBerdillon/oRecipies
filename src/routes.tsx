import { createBrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import Recipe from './components/Recipe';
import Error from './components/Error';
import App from './components/App/App';
import Favorites from './components/Favorites';

// eslint-disable-next-line import/prefer-default-export
export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,

    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/recipes/:slug',
        element: <Recipe />,
      },
    ],
  },
]);
