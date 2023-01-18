import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { dropToken, saveToken } from '../services/token';
import AuthorizationData from '../types/authorization-data';
import AuthorizationStatus from '../types/authorization-status';
import Comment from '../types/comment';
import Film from '../types/film';
import { AppDispatch, State } from '../types/store';
import User from '../types/user';
import { setAuthorizationStatus, setFavoriteFilms, setFilms, setIsDataLoading, setPromoFilm, setUser } from './action';

export const loadFilmsAction = createAsyncThunk<void, undefined, { dispatch: AppDispatch; state: State; extra: AxiosInstance }>
('loadFilms',
  async (_arg, { dispatch, extra: api }) => {
    dispatch(setIsDataLoading(true));
    const { data: films } = await api.get<Film[]>('/films');
    dispatch(setFilms(films));
    const { data: promoFilm } = await api.get<Film>('/promo');
    dispatch(setPromoFilm(promoFilm));
    const { data: favoriteFilms } = await api.get<Film[]>('/favorite');
    dispatch(setFavoriteFilms(favoriteFilms));
    dispatch(setIsDataLoading(false));
  });

export const checkAuthorizationStatusAction = createAsyncThunk<void, undefined, { dispatch: AppDispatch; state: State; extra: AxiosInstance }>
('checkAuthorizationStatus',
  async (_arg, { dispatch, extra: api }) => {
    try {
      const { data: user } = await api.get<User>('/login');
      dispatch(setUser(user));
      dispatch(setAuthorizationStatus(AuthorizationStatus.Authorized));
    }
    catch {
      dispatch(setAuthorizationStatus(AuthorizationStatus.Unauthorized));
    }
  });

export const logInAction = createAsyncThunk<void, AuthorizationData, { dispatch: AppDispatch; state: State; extra: AxiosInstance }>
('logIn',
  async (credentials, { dispatch, extra: api }) => {
    try {
      const { data: user } = await api.post<User>('/login', credentials);
      saveToken(user.token);
      dispatch(setUser(user));
      dispatch(setAuthorizationStatus(AuthorizationStatus.Authorized));
    }
    catch {
      dispatch(setAuthorizationStatus(AuthorizationStatus.Unauthorized));
    }
  });

export const logOutAction = createAsyncThunk<void, undefined, { dispatch: AppDispatch; state: State; extra: AxiosInstance }>
('logOut',
  async (credentials, { dispatch, extra: api }) => {
    await api.delete<User>('/logout', credentials);
    dropToken();
    dispatch(setUser(null));
    dispatch(setAuthorizationStatus(AuthorizationStatus.Unauthorized));
  });

export const loadFilm = createAsyncThunk<Film, number, { dispatch: AppDispatch; state: State; extra: AxiosInstance }>
('loadFilm',
  async (filmId, { extra: api }) => {
    const { data: filmData } = await api.get<Film>(`/films/${filmId}`);
    return filmData;
  });

export const loadSimilar = createAsyncThunk<Film[], number, { dispatch: AppDispatch; state: State; extra: AxiosInstance }>
('loadSimilar',
  async (filmId, { extra: api }) => {
    const { data: similarData } = await api.get<Film[]>(`/films/${filmId}/similar`);
    return similarData;
  });

export const loadComments = createAsyncThunk<Comment[], number, { dispatch: AppDispatch; state: State; extra: AxiosInstance }>
('loadComments',
  async (filmId, { extra: api }) => {
    const { data: commentsData } = await api.get<Comment[]>(`/comments/${filmId}`);
    return commentsData;
  });

export const setIsFavoriteFilm = createAsyncThunk<void, { filmId: number; isFavorite: boolean }, { dispatch: AppDispatch; state: State; extra: AxiosInstance }>
('setIsFavoriteFilm',
  async ({ filmId, isFavorite }, { dispatch, extra: api }) => {
    dispatch(setIsDataLoading(true));
    await api.post<Film>(`/favorite/${filmId}/${isFavorite ? '1' : '0'}`);
    const { data: favoriteFilms } = await api.get<Film[]>('/favorite');
    dispatch(setFavoriteFilms(favoriteFilms));
    dispatch(setIsDataLoading(false));
  });
