import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    // initialState "nowPlayingMovies" is null now, we will add nowplayingmovies using reducers fuction "addNowPlayingMovies" which will change initialState using (state.initionalStaion(nowPlayingMovies)= action.payload)
    nowPlayingMovies: null,
    popularMovies: null,
    topRatedMovies: null,
    upComingMovies: null,
    trailerVideo: null,
    horrorMovies:null
  },
  reducers: {
    //action
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRatedMovies: (state, action)=>{
      state.topRatedMovies = action.payload;
    },
    addUpcomingMovies: (state, action)=>{
      state.upComingMovies = action.payload;
    },
    addHorrorMovies: (state, action)=>{
      state.horrorMovies= action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
  },
});

//export action addNowPlayingMovies which is object key
export const { addNowPlayingMovies, addTrailerVideo, addPopularMovies, addTopRatedMovies, addHorrorMovies , addUpcomingMovies} =
  moviesSlice.actions;
//export all reducer
export default moviesSlice.reducer;
