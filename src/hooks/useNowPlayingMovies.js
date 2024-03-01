import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_KEY_OPTIONS } from "../utils/Constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";

const useNowPlayingMovies = () => {
  // Fetch NoPlayingMovies data Data from TMDB API and update store with NoPlayingMovies data
  const dispatch = useDispatch();
 //Read the nowplaying movies data from Store
  const nowPlayingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies
  );

  const getNowPlayingMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_KEY_OPTIONS);
    const json = await data.json();
    console.log(json.results);
    //dispatch an action (nowPlayingMovies) which was null, now it will payload json data of playing movies inside action nowPlayingMovies
    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
    // above we read the nowPlaying movies, if there is no nowPlaying movies in the store, then only make API call
    //memoization concept
    !nowPlayingMovies && getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;