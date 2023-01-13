import { createReducer } from '@reduxjs/toolkit';
import FILMS from '../mock/films';
import Genre from '../types/genre';
import { changeGenre, setFilms } from './action';


const initialState = {
  activeGenre: Genre.ALL_GENRES,
  films: FILMS
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.activeGenre = action.payload.genre;
    })
    .addCase(setFilms, (state, action) => {
      state.films = action.payload.films;
    });
});

export default reducer;
