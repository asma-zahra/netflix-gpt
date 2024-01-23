import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_KEY_OPTIONS } from "../utils/Constants";
import { addTrailerVideo } from "../utils/moviesSlice";

const useMovieTrailer = (movieId) => {
    //get Trailer Video Video and update the stror
  const dispatch = useDispatch();

  const trailerVideo = useSelector((store) => store.movies.trailerVideo);

  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_KEY_OPTIONS
    );
    const json = await data.json();
    console.log(json.results);
    //out of 10 object filter object key type==="Trailer
    const filterData = json.results.filter((video) => video.type === "Trailer");
    // if filterTrailerData is not availble, means  no trailer availble  then json ka frist key pe jo bhi ho movie ka video play kr do
    const trailer = filterData.length ? filterData[0] : json.results[0];
    console.log(trailer);
    // dispatch an action "addTrailer"  which is null, now payload will add it using 
    dispatch(addTrailerVideo(trailer));
  };
  useEffect(() => {
    !trailerVideo && getMovieVideos();
  }, []);
};

export default useMovieTrailer;