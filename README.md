Netflix GPT

- create react app
- configure tailwind
- configure git repo (netflix-gpt)
- added component folder and utils folder inside SRC
- created component Body,Login and Header, Browse.js
- inside Body, call all the component
- in App.js , call Body component as app is rending on root so on root body component will call which have all component
- configure react-router-dom
- Configure Routing in Body bcz inside Body we called all the compoennt and Body will render on app.js
- Created Login form inside login.js (Header.js login.js)
  -Single Form (Toggele into Sign or Sign up on the basis on State variable)
  -Now Create SIgn-up form (How we can Convert the same sign form into sign up form just by adding few more extra field - title sign Sign up will change to sign up and button sign will change to sign up use state intially SIgnin form true when click on sign up text then Setsignin form false)
  -(When signform true show signin Title sign In button otherwise sign up and Sign up button)4
  -(when SignIN not true show FullNameinputfield (both true)else condition nhi to use !signForm && <input fullname> )

-Commit All code using VS code by giving commit msg "SignIn/SignUp Form && Login page WIth Header"
or Use command
set Github with VS code for quick commit
git status
git add .
git commit -m "SignIn/SignUp Form && Login page WIth Header"
git push -u origin main

- Handle Validation - (if form is large then use Formik)
  -useRef Hook (it is let you refrence a value that is not needed for rendering)
  -onclick of signin or sign up button we need to validate field
  - onsubmit...prevent browser behavior of form to submitting means call onSubmit method onSubmit= (e)=> e.preventDefault use in form tag

-Authentication
-we need backend we will be using google firbase for authentication.
    - Firebase setup
    connect project with app
    enable authentication in firebase
    Enable email and password Athentication

    - Setup firebase for deployment
        1-npm install -g firebase-tools
        2-then command firebase login
        Tips: open git bash in vs code then do Instead of "firebase login" use "firebase login --interactive" in the git bash terminal toavoid error
        3- firebase init then select hosting
        4- firebase deploy
    -Our Netflix app is deployed on firebase with live url https://netflix-gpt-24750.web.app/

- authenticate user sign in sign up with firbase

  - if see firebase doc const auth = getAuth(); is used evry time so keep in separate in firebase.js by imposrting
    import { getAuth } from "firebase/auth";
    and then
    const auth = getAuth();
    we can use auth from here anywhere we want by impoting from this firebase.js component
    import { getAuth } from "firebase/auth";
    export const auth = getAuth();

  - Second, we need to authenticate user with id password, by using firebase API in login'js
    a- so in login.js if no error message then do firbase authentication.
    b- if Sign up form - then write login for authentication with firebase. else if Sign in form-then write login for authentication with firebase.
    <!-- firebase doc: we used this code from firebase doc in login.js to authenticate user with sign in sign up form -->
    <!-- //sign up form (create account with
    createUserWithEmailAndPassword API) -->
    import { createUserWithEmailAndPassword } from "firebase/auth";

    createUserWithEmailAndPassword(auth, email, password)
    <!-- email password will be email.current.value and password.current.value which we getting in form using useref -->

  .then((userCredential) => {
  // Signed up
  const user = userCredential.user;
  // user email password is authented with firebase successfully then console value me value milegi..wrna catch error dega
  })
  .catch((error) => {
  const errorCode = error.code;
  const errorMessage = error.message;
  // ..
  });
  <!-- sign in form (create account with signInWithEmailAndPassword API) -->
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
  // Signed in
  const user = userCredential.user;
  // ...
  })
  .catch((error) => {
  const errorCode = error.code;
  const errorMessage = error.message;
  });
---------------------------------
-Redux Store(Whenever a user is logged in then we push the user data in redux store in a central place so that we can use it anywhere in the aap ) - install redux tolkit
npm i -D @redux/toolkit - install redux
npm i react-redux - add appStore in UTILS - Create userSlice - add Slice reducer in Store
-Provide Store to react app - on click on sign in button, we will dispatch an action, which will update the ruder func, which will update userinfo in userSlice, that's how our Store got updated

    note- we want to push user data when we sign or sign out or logout, so instead of dispatching an action on each time on sign in then sign out then logout, so instead on this writing code again, we will dispatch an action when userAuthStateChange() change, this API firebase give to us. means jab bhi user autication state change hogi (sign in , sign out, logout), to we will dispatch an action and push the user date with action.payload and and ruder fuc chamge and Store modified with user data.
    userAuthStateChange() is a event listener, it will be call again and again, so we want to called it once component will render. useEfect with empty array.
    import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth();
onAuthStateChanged(auth, (user) => {
if (user) {
// User is signed in, see docs for a list of available properties
// https://firebase.google.com/docs/reference/js/auth.user
const uid = user.uid;
// ... call dispacth an action addUser
} else {
// User is signed out
// ...call dispacth an action removeUser
}
});

- call Firbase SignOUt API onlick on header's Sign out button and navigate to home page once signed out successfully.

- call Firebase updateProfile() API after user is signed in with email and passsword in Login.js

-Bug Fix: 1-Sign up user- display name and photo picture update
2- if user is logged in successfully then only navigate to browsepage and update store iwth add user info, if not logged in menas sign out remve user info fro store and navigate to home page

-When component unmount , unsuscribe to event listener, write a clean up function
firebase give unscribe function call it while unmounting
unsubscribe when component unmounts

- for every long string and and all hardcoded value like logo photo url BG URL , keep in Constant.js file and export directly.

- login TMDB website which has movie database. create your deveploer webapp to generate your API key and access token
- read documentation how to use TMDB API access token , how to call API etc.
- Get data from TMDB now Playing Movie list API
- Browse page me we called Movie list API Async function under useeffect.
- in console everything has showing two times, it is beacuse of strict mode, comment strict mode in index.js, manifest.js in index.html link comment which is giving error in console,

-Upto now we have login user data in Redux store.Now let's put our Movie data at Redux Store, So that we can access this data anywhere. - let's create MoviesSlice to put all movie data - add MoviesSlice into Store - check in redux tool, you will see MovieSlice with null value as we have added data uning dispatch
-Dispatch an action(nowPlayingMovies): nowPlaying movies ka data.json jo mila data API se, usse movieSlice dispatch an action(nowPlayingMovies) krke payload se load kr deng - we fetch data from API, and dispatch action se pushed data in Store, we will extract this code from Browse and add it in pur custom hook, to make the Browse component clean useNowPlayingMovies custom hook

- Sturctire of Browse page plan
  {/* structure of Browse page
  Main container - Video Background: get trailer from TMBD Movies-> Video section call the API to get trailer, this will give you trailer of that movie, by giving movie id/series id, check the response of API in TMDB, just test API by gving series id - fetch data for Trailer video

  -update Store with Trailer video data
  9 result ka 9 th key se milega tailer which is availble on youtube,so just use key - using that tailer key, open youtube tailer with that key. copy that embed iframe code in Show it on UI - replace static key with dynamic key - make youtube tariler video mute and autoplay
  -Video Title : Title and overview
  Second container*n - MoeviesList: Now Palying - MovieCard *n - MoeviesList: Trending - MovieCard *n - MoeviesList: Horror - MovieCard _n
  _/}\
   - find CMDB Image URL for MOEVIE poster : attach the poster id wich is given in API = to get full image movies paster path - read nowplaying movies data from store and it gives 20mvies pas it as propes to movielist and map these array in morviecard component

   --------------------------------------
   display Now Playing Movies
   step 1
   get fetch API of Now Playing from TMDB website
   Step - 2
   for clean code fetch Now Playing Movies and then dispatch an action addNowPlayingMovies in to a separate cutom hook
   Step-3
   we want to show this NowPlaying Movies on Browse page so call the custom hook on Browse page
   Step- 4
   to display the read the NowPlaying from store into SecondaryContainer.js as we will display "Now Playing Movies in seconday Container and secondary container is being called on browse page"
   step-5 
   in secondaryConatiner.js me compoent MoviesList me as a props pass title="Now Playing" and Movies={Nowplaying} which is we are reading from store
   step-6
   MoviesList me we are title which we recieved as props and we are showing movies which is json Object
   so we are just showing and Mapping movies.poster. means MoviesList me we are just dispaying Title and list of Now Playing Movies
   ----------------------------
   like wise the same process we are following for Trending Popular Upcoming and Horror Movies
   - in store we are created 
    nowPlayingMovies: null,
    popularMovies: null,
    topRatedMovies: null,
    upComingMovies: null,
    trailerVideo: null,
    horrorMovies:null

    with sama above process we are pushing data for each IntilaState in to Store. and reading the data in secondary container and displaying it.

    Note - TMDB refrence
   1- Under MOVIES LIST : we can get all API for NOW PLAYING, UPCOMING, POPULAR
    NOW PLAYING
    UPCOMING
    POPULAR
    2-  Under Genres
    a- we called API MOVIES LIST : WE get the horro genre id which was 27 in console
    b- then under Discover->Movies just put  with_genres: put 27 in string and click try it to test API 
    Success response this is API link we will be for for Horror Movies.
    



    ----------------------------------------------------------------------------------------
    SEARCH MOVIE SUGGESTION using Search button.

    - make a GPT SEARCH button on HEADER. When clicked show GPT Movies page otherwise Browse page.
    - for all data related GPT we will dispatch in our store. we will safly store GPT related data . GPT slice in our store. 
    - so create gptSlice.js just to keep data separte to clean code.
    - create state to show and hide gpt search   initialState: {
        showGptSearch: false,
    }
    by reducer function we will make this state showGptSearch true. so that we can toggle by clicking on gpt search button
        reducers: {
        toggleGptSearchView: (state) => {
          state.showGptSearch = !state.showGptSearch;
        },
        }
    now import this fuction and use on GPT search button which is in header.js
    import { toggleGptSearchView } from "../utils/gptSlice";
    <div className="flex p-2 justify-between">
              {showGptSearch && (
                <select
                  className="p-2 m-2 bg-gray-900 text-white"
                  onChange={handleLanguageChange}
                >
    </div>
Check - intially in store redux tool kit under gpt showGptSearch:false
we will click on GPT search button it will call funtion handle GPT click which will dipatch an action toggleGptSearchView and make the state showGptSearch:false to true. so now after click on GPT search button in redux store it will show showGptSearch:true now. means button is getting toggled.
again click on button again become false. again click again true.
------------------------------------------------------------------------------
now if SHowGPT action is true, then only load gpt serach page component in browse page dont show main conatiner and secontainer
if showGPT action is false , then show  MAin Contianer and Secondary Container in Browse page, don't show gpt search container
- read from store showGPT action using selector in Browse page
-------------------------------------
Create the Structure of GPTSearchPage
- frist BG_ULR in background, show search bar component and GPTMoviesuggestion componenet in GPTSearch page.
- Search bar component
- movies Suggestion component as per search
- add language select Input and let translate our GPTsearch page into multiple language
- not even a single conatant, not even button name "Search " should be constant, keep it inside constant file.
let make languageConstant.js file. put all constant languge here. for search hindi me "khoj" english me serach spanish me "something else"
- now onlick on select option toggle the hindi to english... "खोज" to "search" for exp
-----------------------------------------------------------
Best Parctice- we have created contant file(list language of json. to show in GPTsearchInput) and conatnt array of object(for select language )
so keep these data inside Redux, so that we can easily change it's State using reducer. for that create a separate Slice "ConfigApp,js" here we will keep all the prefrred language data of app and dark ligh theme data of our app etc.
- never ever commit console log in production or github
--------------------------------
When I slect languge let say spanish , i will call hanleslect fun and give e.taget.value = spanish
now dispatch an action chnage chnage usme dal do e.traget.value so ab redux me jo intial state lan =en that will become spanish, as we push data in store using dispatch
read this value according this lang chnage serach bar placeholde and search text language

------------------------------------
- Multilanguage Search bar
- dynamic button- when search page to name to hompage taki homepage pe jao...wrna button name GPT search
- hide selct button when showgpt false
- GPT API Integration
  - go to platfrm.open.ai (login with same account as of chat gpt) under API? Keys -> create secret key.
  give a name= "netfix-gpt-project" once key you get. store open AI key in constant file
  gpt API is free if is charge 
  - install library openai, it will give fuction to call aPI
  - create file openai.js to keep helper function of openAI
  - in search bar form me input and search button hai as sson we click on search, our 
  form try to submit by refreshing the page, to prevent refresh, use e.prevent default
  - input me jo type ho raha usse read ke liye useref ref attach krkdo input me
  -on click of search button it will call hanldeGptsearch and console search.input.value
  -based on this search in input, get movie data from open AI
  -chat gpt is dumb, it will ask question, so to avoid toHaveTextContent, give clear insruction so that it directly give to movie name based on your search, provide this query as a content in api
  const gptQuery =
  "Act as a Movie Recommendation system and suggest some movies for the query : " +
  inputSearchText.current.value+
  ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

- based on this search in input, get movie data from open AI (by using funtion prvided by openAI library)
- call gpt api , it will return promise so await for it and make the func handleGptSearch Async.
  const gptResults = await openai.chat.completions.create({
    messages: [{ role: "user", content: gptQuery }], // when we click on search, it will show content: gpyQuery result that is basically searchText.current.value.
    model: "gpt-3.5-turbo",
  });
  console.log(gptResults.choices);
export default openai;
  };
  //input in search:funny indian retro movie (we are giving 3 genre)
 // output: gpt will give result in console for funny indian retro movie
 object
 message:
 content:{"andaaz apna apna", "Hera Feri", "Chuke Chupke", "Jaane bhi do yaaro", "Padosan"}
 role: Movie assistant

<!-- -Note: open Ai API does not you call the API from Browser bcz APIkey can be leaked. it will give warning error. in error it will also suggest if you really want to make it call open AI from Browser then set dangerouslyAllowBrowser:true;
  - go to penAI.js and add this flag true
  const openai = new OpenAI({
  apiKey: openAI_Key, // This is the default and can be omitted
  dangerouslyAllowBrowser: true,
}); -->
const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");

// ["Andaz Apna Apna", "Hera Pheri", "Chupke Chupke", "Jaane Bhi Do Yaaro", "Padosan"]
 
 - for each movies which we get from searchGPT call TMDB API (movie section query- write movies name ) for Movies poaster and name and other info 
 - now we got each movie info from TMDB based on our search, let's push these data in stroe(by dispatch an action addGPTMovieResult ) inside GPTslice
 of action: addGPTMovieResult
 - so that we can show the datails of each movie on search page or anywhere from store by suscribing stroe with useSlector.
 - read the movies base on gpt search and show on GPTMovieSuggestin.js page and sgow the movie in MovieList component by reusing the same component.
---------------------------
Q- how to hide secret datails API key and all
A- best way to create .env file
REACT_AAP: add so that react know it is a key
REACT_APP_openAI_Key = "key";

and export like this in content.js 
export const openAI_Key = process.env.REACT_APP_OPENAI_KEY;
env wont be pushed to github. bcx we will add it to gitignore.

----------------------------------------------
Moimoization:
when we goto home page gpt page and vice versa each time it is making API call.
when data is once present in Store. to ahmesha store me rahega..so no need to make API call again and again to stop this we will use Memoization concept
 //Read the nowplaying movies data from Store
  const nowPlayingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies
  );
//getNowPlayingMovies function is making API call for nowPlayingMovies

// above we read the nowPlaying movies, if there is no nowPlaying movies in the store, then only make API call
    !nowPlayingMovies && getNowPlayingMovies();

    -----------------------------------------------
    



 

  









Feature

- login (Login.js)
  1-Header (Header.js)- logo, sign in button , launguege slector input
  2- Login form sign up page / login
- when once authenticated then go to Browse page (Browse.js)
  Header
  main movie
- background video
- title and description

Movie Suggestion

- movie list

Netflix GPT
-accr to search bar
-Movie Suggestion

Component
