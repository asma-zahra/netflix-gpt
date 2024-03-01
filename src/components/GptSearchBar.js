import { useSelector, useDispatch } from "react-redux";
import lang from "../utils/languageConstant";
import { useRef } from "react";
import openai from "../utils/openai";
import { openAI_Key } from "../utils/Constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langSelected = useSelector((store) => store.config.lang);
  const inputSearchText = useRef(null);

  // search movie in TMDB
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
        openAI_Key
    );
    const json = await data.json();

    return json.results;
  };

  const handleGptSearch = async () => {
    console.log(inputSearchText.current.value);
    //based on this search in input, get movie data from open AI
     // chat gpt is dumb, it will ask question, so to avoid toHaveTextContent, give clear insruction so that it directly give to movie name based on your search, provide this query as a content in api
  const gptQuery =
  "Act as a Movie Recommendation system and suggest some movies for the query : " +
  inputSearchText.current.value+
  ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

//based on this search in input, get movie data from open AI (by using funtion prvided by openAI library)
const gptResults = await openai.chat.completions.create({
  messages: [{ role: "user", content: gptQuery }],
  model: "gpt-3.5-turbo",
});

if (!gptResults.choices) {
  // TODO: Write Error Handling
}

console.log(gptResults.choices?.[0]?.message?.content);

// Andaz Apna Apna, Hera Pheri, Chupke Chupke, Jaane Bhi Do Yaaro, Padosan
//using split get array with sparated comma from this pbject
const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");

// aaray ["Andaz Apna Apna", "Hera Pheri", "Chupke Chupke", "Jaane Bhi Do Yaaro", "Padosan"]

// For each movie It will search TMDB API using searchMovieTMDB async fuction

const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));

// for each movie we will get promise, array ka fisr movei api se wait karega result fauran dusrin movie frr tesri...bina wait se check karega'
//and give promise of array, bcz async function we need to awat until all the array promise is resolved.

// [Promise, Promise, Promise, Promise, Promise]

const tmdbResults = await Promise.all(promiseArray);

console.log(tmdbResults);
//push data in the store
 dispatch(
  addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
);
 
}
  

  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center">
      <form
        className="w-full md:w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={inputSearchText}
          type="text"
          className=" p-4 m-4 col-span-9"
          placeholder={lang[langSelected].gptSearchPlaceholder}
        />
        <button
          className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
          onClick={handleGptSearch}
        >
          {lang[langSelected].search}
        </button>
      </form>
    </div>
  );
};
export default GptSearchBar;
