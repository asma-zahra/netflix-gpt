import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_KEY_OPTIONS } from "../utils/Constants";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const topRatedMovies = useSelector (store=>store.movies.topRatedMovies);

  //fetch top rated movies data
  const fetchTopRatedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      API_KEY_OPTIONS
    );
    const json = await data.json();
    console.log(json);
    // load top rated movies data into our store inside addTopRatedMovies
    dispatch(addTopRatedMovies(json.results));
  };

  useEffect(() => {
     // above we read the topRatedMovies movies, if there is no topRatedMovies movies in the store, then only make API call
    //memoization concept
    !topRatedMovies && fetchTopRatedMovies();
  }, []);
};
export default useTopRatedMovies;
