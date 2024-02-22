import React, { useEffect } from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { onAuthStateChanged } from "firebase/auth";
import {auth} from "../utility/firebase"
import Login from "./Login"
import Browse from './Browse'
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utility/userSlice'
import Offer from './Offer';
import Help from './Help';
import Restaurents from './Restaurents';
import Cart from './Cart';
import ResContainer from './ResContainer';
import Restaurentmenu from './Restaurentmenu';

const Body = () => {
  const dispatch = useDispatch()
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login/>
    },
    {
      path: "/browse",
      element: <Browse/>,
      children : [
        {
          path: "/browse",
          element: <Restaurents/>
        },
        {
          path: "/browse/offer",
          element: <Offer/>,
        },
        {
          path: "/browse/help",
          element: <Help/>,
        },
        {
          path: "/browse/cart",
          element: <Cart/>,
        },
        {
          path: "/browse/restaurent/:resId",
          element: <Restaurentmenu/>,
        },
      ]
    }
  ])


  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid, email, displayName} = user;
        dispatch(addUser({uid: uid, email: email, displayName: displayName}))
      } else {
        dispatch(removeUser())
      }
    });
  },[])
  

  return (
    <div>
     <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body
