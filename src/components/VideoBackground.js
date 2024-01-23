import {  useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({movieId})=>{
  //read tariler from the store
    const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
// in this custome hook we have already fetch the tailer data using API and dispatch it inside store.
    useMovieTrailer(movieId);

return(
     <div className=" w-screen">
      <iframe
        className="w-screen aspect-video pointer-events-none "
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key + "?&autoplay=1&mute=1&loop=1&controls=0&showinfo=0&autohide=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>

)
    }
export default VideoBackground;