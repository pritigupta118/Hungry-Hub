import React from 'react'
import Header from './Header'
import Restaurents from './Restaurents'
import { Outlet } from 'react-router-dom'

const Browse = () => {
  return (
    <div>
    <Header/>
   <Outlet/>
    </div>
  )
}

export default Browse
