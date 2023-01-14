import { createAction } from '@reduxjs/toolkit';
import Film from '../types/film';
import Genre from '../types/genre';

export const changeGenre = createAction<{genre: Genre}>('changeGenre');
export const setFilms = createAction<{films: Film[]}>('setFilms');
export const incrementShowedFilmsCount = createAction('incrementShowedFilmsCount');
export const refreshShowedFilmsCount = createAction('refreshShowedFilmsCount');
