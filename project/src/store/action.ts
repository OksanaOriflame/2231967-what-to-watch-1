import { createAction } from '@reduxjs/toolkit';
import AuthorizationStatus from '../types/authorization-status';
import Film from '../types/film';
import Genre from '../types/genre';
import User from '../types/user';

export const changeGenre = createAction<Genre>('changeGenre');
export const setFilms = createAction<Film[]>('setFilms');
export const incrementShowedFilmsCount = createAction('incrementShowedFilmsCount');
export const refreshShowedFilmsCount = createAction('refreshShowedFilmsCount');
export const setIsDataLoading = createAction<boolean>('setIsDataLoading');
export const setAuthorizationStatus = createAction<AuthorizationStatus>('setAuthenticationStatus');
export const setUser = createAction<User | null>('setUser');
