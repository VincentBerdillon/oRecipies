import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

type UserData = {
  pseudo: string;
  token: string;
  logged: boolean;
};

interface UserState {
  isLoading: boolean;
  error?: string;
  pseudo?: string;
  token?: string;
  isLogged: boolean;
  credentials: { email: string; password: string };
  loggedMsg: string;
}

const userStringifiedData = localStorage.getItem('user');
let userData: UserData | null = null;
if (userStringifiedData) {
  userData = JSON.parse(userStringifiedData);
}

export const initialState: UserState = {
  isLoading: false,
  isLogged: false,
  loggedMsg: '',
  credentials: {
    email: '',
    password: '',
  },
  ...userData,
};

type LoginCredentials = { email: string; password: string };
export const login = createAsyncThunk(
  'LoginForm',
  async (credentials: LoginCredentials) => {
    const { data } = await axios.post<UserData>(
      'https://orecipes-api.onrender.com/api/login',
      credentials
    );

    localStorage.setItem('user', JSON.stringify(data));

    return data;
  }
);

const userReducer = createSlice({
  name: 'user',
  initialState,
  reducers: {
    changeField(
      state,
      action: PayloadAction<{
        name: keyof UserState['credentials'];
        value: string;
      }>
    ) {
      state.credentials[action.payload.name] = action.payload.value;
    },
    handleLogout(state) {
      localStorage.removeItem('user');
      state.isLogged = false;
      state.pseudo = undefined;
      state.token = undefined;
    },
  },

  extraReducers(builder) {
    builder.addCase(login.pending, (state) => {
      state.isLoading = true;
      state.error = undefined;
    });
    builder.addCase(login.rejected, (state) => {
      state.isLoading = false;
      state.error = 'Identifiants incorrects';
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.isLoading = false;
      state.pseudo = action.payload.pseudo;
      state.token = action.payload.token;
      state.isLogged = action.payload.logged;
      state.loggedMsg = 'vous êtes connecté';
    });
  },
});

export const { changeField, handleLogout } = userReducer.actions;
export default userReducer.reducer;
