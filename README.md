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
    import {  createUserWithEmailAndPassword } from "firebase/auth";

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


-Redux Store(Whenever a user is logged in then we push the user data in redux store in a central place so that we can use it anywhere in the aap )
    - install redux tolkit
    npm i -D @redux/toolkit
    - install redux
    npm i react-redux
    - add appStore in UTILS
    - Create userSlice
    - add Slice reducer in Store
    -Provide Store to react app
    - on click on sign in button, we will dispatch an action, which will update the ruder func, which will update userinfo in userSlice, that's how our Store got updated

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

- login TMDB website which has movie database. create your deveploer webapp to generate your API key
- read documentation how to use TMDB API access token , how to call API etc.



    

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



