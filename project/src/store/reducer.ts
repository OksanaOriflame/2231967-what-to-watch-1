import { createReducer } from '@reduxjs/toolkit';
import { DEFAULT_SHOWED_FILMS_COUNT, SHOWED_FILMS_COUNT_STEP } from '../const';
import AuthorizationStatus from '../types/authorization-status';
import Film from '../types/film';
import Genre from '../types/genre';
import User from '../types/user';
import { changeGenre, incrementShowedFilmsCount, refreshShowedFilmsCount, setAuthorizationStatus, setFilms, setIsDataLoading, setUser } from './action';

type AppState = {
  activeGenre: Genre;
  films: Array<Film>;
  showedFilmsCount: number;
  isDataLoading: boolean;
  authorizationStatus: AuthorizationStatus;
  user: User | null;
}

const initialState: AppState = {
  activeGenre: Genre.ALL_GENRES,
  films: new Array<Film>(0),
  showedFilmsCount: DEFAULT_SHOWED_FILMS_COUNT,
  isDataLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  user: null
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.activeGenre = action.payload;
    })
    .addCase(setFilms, (state, action) => {
      state.films = action.payload;
    })
    .addCase(incrementShowedFilmsCount, (state) => {
      state.showedFilmsCount += SHOWED_FILMS_COUNT_STEP;
    })
    .addCase(refreshShowedFilmsCount, (state) => {
      state.showedFilmsCount = DEFAULT_SHOWED_FILMS_COUNT;
    })
    .addCase(setIsDataLoading, (state, action) => {
      state.isDataLoading = action.payload;
    })
    .addCase(setAuthorizationStatus, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setUser, (state, action) => {
      state.user = action.payload;
    });
});

export default reducer;
