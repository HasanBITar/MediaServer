
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BACKEND_API, API } from '../config';

export const AUTH_STATUS = {
  idle: 'idle',
  loading: 'loading',
  succeeded: 'succeeded',
  failed: 'failed'
}

const initialState = {
  user: null,
  status: AUTH_STATUS.idle,
  error: null,
};


const apiClient = axios.create({ baseURL: BACKEND_API });

export const login = createAsyncThunk(API.signin, async (credentials) => {
  const response = await apiClient.post(API.signin, credentials);
  return response.data;
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout(state) {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.status = AUTH_STATUS.loading;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = AUTH_STATUS.succeeded;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.status = AUTH_STATUS.failed;
        state.error = action.error.message;
      });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
