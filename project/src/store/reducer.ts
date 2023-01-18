import { createReducer } from '@reduxjs/toolkit';
import { DEFAULT_SHOWED_FILMS_COUNT, SHOWED_FILMS_COUNT_STEP } from '../const';
import AuthorizationStatus from '../types/authorization-status';
import Comment from '../types/comment';
import Film from '../types/film';
import Genre from '../types/genre';
import User from '../types/user';
import { changeGenre, incrementShowedFilmsCount, refreshShowedFilmsCount, setAuthorizationStatus, setFavoriteFilms, setFilms, setIsDataLoading, setPromoFilm, setUser } from './action';
import { loadComments, loadFilm, loadSimilar } from './api-actions';

type AppState = {
  activeGenre: Genre;
  films: Array<Film>;
  film: Film | null;
  similar: Film[];
  comments: Comment[];
  promoFilm: Film | null;
  showedFilmsCount: number;
  isDataLoading: boolean;
  authorizationStatus: AuthorizationStatus;
  user: User | null;
  favoriteFilms: Film[];
}

const initialState: AppState = {
  activeGenre: Genre.ALL_GENRES,
  films: new Array<Film>(0),
  film: null,
  similar: Array<Film>(0),
  comments: Array<Comment>(0),
  promoFilm: null,
  showedFilmsCount: DEFAULT_SHOWED_FILMS_COUNT,
  isDataLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  user: null,
  favoriteFilms: Array<Film>(0)
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.activeGenre = action.payload;
    })
    .addCase(setFilms, (state, action) => {
      state.films = action.payload;
    })
    .addCase(loadFilm.fulfilled, (state, action) => {
      state.film = action.payload;
    })
    .addCase(loadSimilar.fulfilled, (state, action) => {
      state.similar = action.payload;
    })
    .addCase(loadComments.fulfilled, (state, action) => {
      state.comments = action.payload;
    })
    .addCase(setPromoFilm, (state, action) => {
      state.promoFilm = action.payload;
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
    })
    .addCase(setFavoriteFilms, (state, action) => {
      state.favoriteFilms = action.payload;
    });
});

export default reducer;
