// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import UISlice from './UISlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    UI: UISlice,
  },
});

export default store;
