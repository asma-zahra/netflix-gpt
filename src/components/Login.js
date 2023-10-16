import { useState } from "react";
import Header from "./Header";



const Login = () => {
  const [isSignINForm,setIsSignUpForm] = useState(true);

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
      <form className="w-3/12 absolute z-4 bg-black p-12 mx-auto left-0 right-0 mt-24 text-white bg-opacity-80">
        <h1 className=" font-bold  text-3xl py-4 ">{isSignINForm? "Sign In":"Sign Up"} </h1>
        {!isSignINForm && <input type="text" placeholder="Full Name" className=" px-4 py-3 mb-4 w-full bg-gray-900"/>}
        <input type="text" placeholder="Email Address" className=" px-4 py-3 mb-4 w-full bg-gray-900 "/>
        <input type="password" placeholder="Password" className=" px-4 py-3 mb-4 w-full bg-gray-900"/>
        <button className="p-4 my-8 w-full bg-red-700">{isSignINForm ? "Sign IN": "Sign Up"}</button>
        <p onClick={toggleSignInForm}><span className=" text-gray-400 "> {isSignINForm?"New to netflix?":"Already Registered?"}</span> {isSignINForm? "Sign Up" : "Sign In Now"}</p>
      </form>
    </div>
  );
};
export default Login;
