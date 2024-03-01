import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcmingMovies";
import useHorrorMovies from "../hooks/useHorrorMovies";
import { useSelector } from "react-redux";
import GptSearchPage from "./GptSearchPage";

const Browse = ()=>{
    const showgptSearch = useSelector(store => store.gpt.showGptSearch);
    console.log(showgptSearch +"gpt");

    useNowPlayingMovies();
    usePopularMovies();
    useTopRatedMovies();
    useUpcomingMovies();
    useHorrorMovies();

    return(
        <div>
            <Header/>
            {/* //if showGptSearch is true then only load gptsearch component in borwse page if false then load MainContainer SecondaryContainer in bowse page */}
            {showgptSearch?(<GptSearchPage/>): (<>
            <MainContainer/>
            <SecondaryContainer/> 
            </> )}
            
        </div>
    )
}
export default Browse;