import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcmingMovies";
import useHorrorMovies from "../hooks/useHorrorMovies";

const Browse = ()=>{
    useNowPlayingMovies();
    usePopularMovies();
    useTopRatedMovies();
    useUpcomingMovies();
    useHorrorMovies();

    return(
        <div>
            <Header/>
            <MainContainer/>
            <SecondaryContainer/> 
        </div>
    )
}
export default Browse;