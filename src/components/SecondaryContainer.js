import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = ()=>{
    const movies = useSelector (store=>store.movies.nowPlayingMovies);
    return(
        <div>
            <MovieList movies={movies} title={"Noe Playing"}/>

        </div>
    )
}
export default SecondaryContainer;