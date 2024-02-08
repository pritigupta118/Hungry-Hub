import React, { useRef, useState } from 'react'
import { formValidation } from '../utility/validation'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utility/firebase';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true) // true means login, false means sign up
const email = useRef(null)
const password = useRef(null)
const navigate = useNavigate();

const [errorMessage, setErrorMessage] = useState(null)

  const handleButtonClick = () => {
    // form validation
   const message =formValidation(email?.current?.value, password?.current?.value)
    setErrorMessage(message)
    if(message) return;

    if(!isLogin){
      createUserWithEmailAndPassword(auth, email?.current?.value, password?.current?.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user)
    navigate("/browse")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode  + ": " + errorMessage);
  });
    }
    else{
      signInWithEmailAndPassword(auth, email?.current?.value, password?.current?.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
   console.log(user)
   navigate("/browse")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode  + ": " + errorMessage);
  });
    }
  }
const toggleLoginButton = () =>{
setIsLogin(!isLogin);
}

  return (
    <div className='w-full h-screen flex justify-center items-center bg-[#E6E6FA]'>

  <form onSubmit={(e) => {e.preventDefault()}} className='bg-white flex flex-col gap-4 w-full sm:w-8/12 md:w-5/12 p-4 sm:p-8 md:p-12'>

  <div className='flex justify-between'>
    <div className='flex flex-col gap-4'> 
    <h1 className='text-4xl font-semibold'>{isLogin ? "Login" : "Sign Up"}</h1>
  <p>or <span className='text-orange-500 font-medium cursor-pointer' onClick={toggleLoginButton}>{isLogin ? "create an account" : " login to your account"}</span></p>
  </div>
  <div>
    <img className='w-[80px] md:w-[100px]' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r" alt="" />
  </div>
  </div>
  
{!isLogin && <input type="text" placeholder="Full Name" className='p-4 rounded bg-[#131313] text-white'/>}
<input ref={email} type="text" placeholder="Email address" className='p-4 rounded bg-[#131313] text-white'/>
 <input ref={password} type="password" placeholder="Password" className='p-4 rounded bg-[#131313] text-white'/>
 <p className='text-red-500 font-semibold text-center'>{errorMessage}</p>
    <button className='w-full bg-[#fc8019] p-3 rounded text-white font-bold' onClick={handleButtonClick}>{isLogin ? "LOGIN" : "SIGN UP"}</button>
    <p className='text-sm'>By clicking on Login, I accept the <span className='font-semibold'>Terms & Conditions & Privacy Policy</span></p>
  </form>
    </div>
  )
}

export default Login
