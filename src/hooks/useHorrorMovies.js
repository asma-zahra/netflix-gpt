import { useDispatch, useSelector } from "react-redux";
import { API_KEY_OPTIONS } from "../utils/Constants";
import { addHorrorMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useHorrorMovies = ()=>{
    const dispatch = useDispatch();
    const horrorMovies = useSelector (store=>store.movies.horrorMovies);

    //fetch horror movies data
    const fetchHorrorMovies = async ()=>{
        const data = await fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=27', API_KEY_OPTIONS );
        const json = await data.json();
        console.log(json);
        //dispatch an action addHorrorMovies to load data into intialState by the reducerfuction addHorrorMovies
        dispatch(addHorrorMovies(json.results));
    }

    useEffect(()=>{
// above we read the horrorMovies movies, if there is no horrorMovies movies in the store, then only make API call
    //memoization concept
       !horrorMovies && fetchHorrorMovies();
    },[])


}
export default useHorrorMovies;