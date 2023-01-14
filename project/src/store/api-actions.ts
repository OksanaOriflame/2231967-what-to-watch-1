import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import Film from '../types/film';
import { AppDispatch, State } from '../types/store';
import { setFilms, setIsDataLoading } from './action';

const loadFilms = createAsyncThunk<void, undefined, { dispatch: AppDispatch; state: State; extra: AxiosInstance }>
('loadFilms',
  async (_arg, { dispatch, extra: api }) => {
    dispatch(setIsDataLoading(true));
    const { data } = await api.get<Film[]>('/films');
    dispatch(setFilms(data));
    dispatch(setIsDataLoading(false));
  });

export default loadFilms;
