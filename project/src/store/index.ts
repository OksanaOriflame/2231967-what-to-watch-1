import { configureStore } from '@reduxjs/toolkit';
import api from '../services/api';
import reducer from './reducer';

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    thunk: {
      extraArgument: api
    }
  })
});

export default store;
