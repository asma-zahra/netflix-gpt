import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = ()=>{
    const NowPlayingMovies = useSelector (store=>store.movies.nowPlayingMovies);
    const PopularMovies = useSelector (store=>store.movies.popularMovies);
    const topRatedMovies = useSelector (store=>store.movies.topRatedMovies);
    const upComingMovies = useSelector (store=>store.movies.upComingMovies);
    const horrorMovies = useSelector (store=>store.movies.horrorMovies);
    
    return(
        <div className=" bg-black ">
            <MovieList movies={NowPlayingMovies} title={"Now Playing"}/>
            <MovieList movies={PopularMovies} title={"Trending"}/>
            <MovieList movies={topRatedMovies} title={"Top Rated"}/>
            <MovieList movies={upComingMovies} title={"Upcming Movies"}/>
            <MovieList movies={horrorMovies} title={"Horror"}/>
        </div>
    )
}
export default SecondaryContainer;