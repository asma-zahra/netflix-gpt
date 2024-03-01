import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  //actions
  initialState: {
    showGptSearch: false,
    movieResults: null,
    movieNames: null,
  },
  //reducer
  reducers: {
    toggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMovieResult: (state, action) => {
      const { movieNames, movieResults } = action.payload;
      state.movieNames = movieNames;
      state.movieResults = movieResults;
    },
  },
});

//export actions
export const { toggleGptSearchView, addGptMovieResult } = gptSlice.actions;
//export reducer
export default gptSlice.reducer;