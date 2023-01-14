import { createReducer } from '@reduxjs/toolkit';
import { DEFAULT_SHOWED_FILMS_COUNT, SHOWED_FILMS_COUNT_STEP } from '../const';
import Film from '../types/film';
import Genre from '../types/genre';
import { changeGenre, incrementShowedFilmsCount, refreshShowedFilmsCount, setFilms, setIsDataLoading } from './action';


const initialState = {
  activeGenre: Genre.ALL_GENRES,
  films: new Array<Film>(0),
  showedFilmsCount: DEFAULT_SHOWED_FILMS_COUNT,
  isDataLoading: false
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
    });
});

export default reducer;
