import { useRef, useState } from "react";
import Header from "./Header";
import { ValidationCheck } from "../utils/Validation";
import {  createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";



const Login = () => {
  const [isSignINForm,setIsSignUpForm] = useState(true);
  const[errorMessage, setErrorMessage] = useState(null);

  //useRef give object with current input value key and value
  const email = useRef(null);
  const password = useRef(null);

  const handleInputValidation = ()=>{
    //Validate form Data 
    // utils me validation js me whole validation coded
    //how to refrence email and passwrod from input boxes? ans : useRef
    console.log(email.current.value, password.current.value);
    const message = ValidationCheck(email.current.value, password.current.value);
    console.log(message);
    setErrorMessage(message);
// means if error msg comes then dont run run the code after this point just return, otherwise email password sahi hoga to authenticate user to firebase
    if(message)return;

    // Sign in / Sign up logic to register user to firebase
    //check if is sign in form or sign up form accordingly write logic
    if(!isSignINForm){
      //means sign up hai, write login for sign up to craete acoount with email password to firebase, use firebase API
//from Firebase doc, used API createUserWithEmailAndPassword with code which relove promise and actch error
  createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);
    // now show API error msg in form below input fields
    setErrorMessage(errorCode+" "+errorMessage);
  });
}
    else{
      //means sign in form hai, write logic for sign in
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);
    // now show API error msg in form below input fields
    setErrorMessage(errorCode+" "+errorMessage);
  });
    }


    

  }

  const toggleSignInForm= ()=>{
    setIsSignUpForm(!isSignINForm);
    
    console.log(isSignINForm);
  }
  return (
    <div>
      <Header />
      <div className="absolute left-0 top-0 z-0 ">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9db4a880-3034-4e98-bdea-5d983e86bf52/b5953637-091d-4e02-9754-2bfadc8a8f7c/IN-en-20230925-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="netflix-bg"
        />
      </div>
      <form onSubmit={(e)=> e.preventDefault()} className="w-3/12 absolute z-4 bg-black p-12 mx-auto left-0 right-0 mt-24 text-white bg-opacity-80">
        <h1 className=" font-bold  text-3xl py-4 ">{isSignINForm? "Sign In":"Sign Up"} </h1>
        {!isSignINForm && <input type="text" placeholder="Full Name" className=" px-4 py-3 mb-4 w-full bg-gray-900"/>}
        <input ref={email} type="text" placeholder="Email Address" className=" px-4 py-3 mb-4 w-full bg-gray-900 "/>
        <p className=" text-orange-500 ">{errorMessage}</p>
        <input ref={password} type="password" placeholder="Password" className=" px-4 py-3 mb-4 w-full bg-gray-900"/>
        <p className=" text-orange-500 ">{errorMessage}</p>

        <button className="p-4 my-8 w-full bg-red-700" onClick={handleInputValidation}>{isSignINForm ? "Sign IN": "Sign Up"}</button>
        <p onClick={toggleSignInForm}><span className=" text-gray-400 "> {isSignINForm?"New to netflix?":"Already Registered?"}</span> {isSignINForm? "Sign Up" : "Sign In Now"}</p>
      </form>
    </div>
  );
};
export default Login;
