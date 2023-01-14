import { createReducer } from '@reduxjs/toolkit';
import { DEFAULT_SHOWED_FILMS_COUNT, SHOWED_FILMS_COUNT_STEP } from '../const';
import FILMS from '../mock/films';
import Genre from '../types/genre';
import { changeGenre, incrementShowedFilmsCount, refreshShowedFilmsCount, setFilms } from './action';


const initialState = {
  activeGenre: Genre.ALL_GENRES,
  films: FILMS,
  showedFilmsCount: DEFAULT_SHOWED_FILMS_COUNT
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.activeGenre = action.payload.genre;
    })
    .addCase(setFilms, (state, action) => {
      state.films = action.payload.films;
    })
    .addCase(incrementShowedFilmsCount, (state) => {
      state.showedFilmsCount += SHOWED_FILMS_COUNT_STEP;
    })
    .addCase(refreshShowedFilmsCount, (state) => {
      state.showedFilmsCount = DEFAULT_SHOWED_FILMS_COUNT;
    });
});

export default reducer;
