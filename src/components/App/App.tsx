import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Menu from '../Menu';

import Loading from './Loading';

import './App.scss';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchRecipes } from '../../store/reducers/recipes';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchRecipes());
  }, [dispatch]);

  const isLoading = useAppSelector((state) => state.recipes.isLoading);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="app">
      <Menu />
      <Outlet />
    </div>
  );
}

export default App;
