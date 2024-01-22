import { useEffect } from "react";
import { API_KEY_OPTIONS } from "../utils/Constants";
import Header from "./Header";

const Browse = ()=>{
    const nowPlayingMovies = async()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_KEY_OPTIONS)
        const json = await data.json();
        console.log(json);
    }
    useEffect(()=>{
        nowPlayingMovies();

    }, [])
    return(
        <div>
            <Header/>
        </div>
    )
}
export default Browse;