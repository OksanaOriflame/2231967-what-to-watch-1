import { configureStore } from '@reduxjs/toolkit';
import createApi from '../services/api';
import reducer from './reducer';

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    thunk: {
      extraArgument: createApi()
    }
  })
});

export default store;
