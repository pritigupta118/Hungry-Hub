import React, { useState } from 'react'
import { FaHamburger, FaTimes } from "react-icons/fa";
import { signOut } from "firebase/auth";
import { auth } from '../utility/firebase';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Header = () => {
const navigate = useNavigate()
const [nav, setNav] = useState(false)
const toggleMenu = () =>{
  setNav(!nav)
}

const handleSignOutClick = () =>{
signOut(auth).then(() => {
 navigate("/")
}).catch((error) => {
  navigate("/error")
});
}


  return (
    <div className='w-full h-[80px] flex justify-center items-center shadow-md'>
    <div className='w-full h-full md:w-10/12 flex justify-between items-center p-4'>
    <div>
        <img className='w-[35px] sm:w-[50px]' src="https://freepngimg.com/download/food/7-2-food-picture.png" alt="logo" />
      </div>
     
        <nav className='hidden md:flex justify-center items-center'>
        <li><Link to="/browse">Home</Link></li>
          <li><Link to="/browse/offer">Offers</Link></li>
          <li><Link to="/browse/help">Help</Link></li>
          <li><Link to="/browse/cart">Cart</Link></li>
         <button className='text-lg font-semibold bg-red-600 p-2 text-white rounded' onClick={handleSignOutClick}>Sign Out</button>
        </nav>

        <div onClick={toggleMenu} className='md:hidden z-10'>
        {!nav ? <FaHamburger size={25}/> : <FaTimes size={25} className='text-white'/>}
        </div>
 <nav className={!nav ? 'hidden' : "absolute top-0 left-[50%] w-1/2 h-screen bg-[#131313] flex flex-col justify-center items-center text-white"}>
        <li className='py-6 text-xl'>Home</li>
          <li className='py-6 text-xl'>Offers</li>
          <li className='py-6 text-xl'>Cart</li>
          <li className='py-6 text-xl' onClick={handleSignOutClick}><div className='bg-red-600 p-2 rounded-lg'>Sign Out</div></li>
        </nav>
    
    </div>
  
    </div>
  )
}

export default Header
