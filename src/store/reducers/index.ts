import recipesReducer from './recipes';
import userReducer from './user';

const reducer = {
  recipes: recipesReducer,
  user: userReducer,
};

export default reducer;
