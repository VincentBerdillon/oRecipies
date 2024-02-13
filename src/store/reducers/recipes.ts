import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Recipe } from '../../@types/recipe';
import axios from 'axios';

interface RecipesState {
  isLoading: boolean;
  list: Recipe[];
}
export const initialState: RecipesState = {
  isLoading: true,
  list: [],
};

export const fetchRecipes = createAsyncThunk('recipes/fetch', async () => {
  const { data } = await axios.get<Recipe[]>(
    'https://orecipes-api.onrender.com/api/recipes'
  );

  return data;
});

const recipesReducer = createSlice({
  name: 'recipes',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchRecipes.fulfilled, (state, action) => {
        state.list = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchRecipes.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchRecipes.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default recipesReducer.reducer;
