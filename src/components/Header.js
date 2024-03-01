import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { LANGUAGE_SUPPORT_SELECT, LOGO } from "../utils/Constants";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate("/");
  // inside Body,we have dispatch photo of user name mail in adduser slice
  //now display the info using useSlector hook by suscribing store
  const user = useSelector((store) => store.user);
  const showGptSearch= useSelector((store)=>store.gpt.showGptSearch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        //then navigate to home page
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };
  //..................................................................
  //Firebase API when user Auth State change(Signin or signout or sign up logout to any)
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, extract user data from user object using object destructuring userID(uid, email), set up store by adding user data
        //if user logged in then only and only navigate to browse page
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        // remove user data from the Store by dispatching an action
        //if user logged out then retrict user access to browse page, so navigate user to home page wich is login page
        dispatch(removeUser());
        navigate("/");
      }
    });

    // Unsiubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  const handleLanguageChance = (e)=>{
    console.log(e.target.value);
    // current value me dispatch krke store bhi update kr d
    dispatch( changeLanguage(e.target.value) );
    //when you click on spanich in slect to spanish update hoga store me intialstate ne en to spanish you can see the updates
  }

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
      <img className="w-44 mx-auto md:mx-0 " src={LOGO} alt="logo" />

      {user && (
        <div className="flex p-2 justify-between">
        { showGptSearch && <select className="p-2 m-2 bg-gray-900 text-white" onChange={handleLanguageChance}>
            {LANGUAGE_SUPPORT_SELECT.map((lang)=><option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
          </select>
}
          <button
            className="py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg"
            onClick={handleGptSearchClick}
          >
            {showGptSearch? "Home Page": "GPT Search "}
          </button>
          <img
            className="hidden md:block w-12 h-12 mr-4"
            alt="usericon"
            src={user?.photoURL}
          />
          <button onClick={handleSignOut} className="font-bold text-white ">
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};
export default Header;
