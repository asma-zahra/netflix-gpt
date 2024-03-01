import { BG_URL } from "../utils/Constants";
import GptMovieSuggestion from "./GptMovieSuggestion";
import GptSearchBar from "./GptSearchBar";

const GptSearchPage = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img className="object-cover" src={BG_URL } alt="logo" />
      </div>
      <div className="">
        //GPT search BAR
        <GptSearchBar />
        //GPT MOVIE SuGGESTION
        <GptMovieSuggestion />
      </div>
    </>
  );
};
export default GptSearchPage;
