import React, { useState } from 'react'


const Login = () => {
  const [isLogin, setIsLogin] = useState(true) // true means login, false means sign up
const toggleLoginButton = () =>{
setIsLogin(!isLogin);
}

  return (
    <div className='w-full h-screen flex justify-center items-center bg-[#E6E6FA]'>

  <form className='bg-white flex flex-col gap-4 w-full sm:w-8/12 md:w-5/12 p-4 sm:p-12'>

  <div className='flex justify-between'>
    <div className='flex flex-col gap-4'> 
    <h1 className='text-4xl font-semibold'>{isLogin ? "Login" : "Sign Up"}</h1>
  <p>or <span className='text-orange-500 font-medium cursor-pointer' onClick={toggleLoginButton}>{isLogin ? "create an account" : " login to your account"}</span></p>
  </div>
  <div>
    <img className='w-[80px] md:w-[100px]' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r" alt="" />
  </div>
  </div>
  
{!isLogin && <input type="text" placeholder="Full Name" className='p-4 rounded bg-[#131313]'/>}
 <input type="text" placeholder="Email address" className='p-4 rounded bg-[#131313]'/>
 <input type="password" placeholder="Password" className='p-4 rounded bg-[#131313]'/>
    <button className='w-full bg-[#fc8019] p-3 rounded text-white font-bold'>{isLogin ? "LOGIN" : "SIGN UP"}</button>
    <p className='text-sm'>By clicking on Login, I accept the <span className='font-semibold'>Terms & Conditions & Privacy Policy</span></p>
  </form>
    </div>
  )
}

export default Login
