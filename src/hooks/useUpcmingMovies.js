import { useEffect } from "react";
import { API_KEY_OPTIONS } from "../utils/Constants"
import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovies } from "../utils/moviesSlice";

const useUpcomingMovies = ()=>{
    const dispatch = useDispatch();
    const upComingMovies = useSelector (store=>store.movies.upComingMovies);
    //fetch upcoming movies
    const fetchUpcomingMovies = async ()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', API_KEY_OPTIONS );
        const json= await data.json();
        console.log(json);
        dispatch(addUpcomingMovies(json.results));
    }

    useEffect(()=>{
      // above we read the upComingMovies movies, if there is no upComingMovies movies in the store, then only make API call
    //memoization concept
      !upComingMovies &&  fetchUpcomingMovies();
    }, []);
}
export default useUpcomingMovies;