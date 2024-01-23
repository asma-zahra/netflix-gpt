import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  //it gives 20 movies from store
  //early return
  if (!movies) return;
  //out of 20 movies, we need first one as a background video
  //as in mian container, we just need one movie trialder id one title of that nmovie and description
  const mainMovie = movies[0];

  const { original_title, overview, id } = mainMovie;
  //pass title and verview as a props to VideoTitle component

  return (
    <div className="pt-[30%] bg-black md:pt-0">
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};
export default MainContainer;