import React from 'react'
import { RES_LOGO } from '../utility/constants'

const ResContainer = (props) => {
  const {resData} = props

  const {cloudinaryImageId, name, avgRating, deliveryTime,cuisines, areaName} = resData?.info
  return (
  
    <div className='w-[250px] p-4 m-4  hover:scale-105 transition-transform duration-300 ease-in-out'>
    <img className='rounded-2xl w-[234px] h-[180px]' src={RES_LOGO + cloudinaryImageId} alt="res-img" />
    
    <div className='p-2'>
    <h3 className='font-bold text-lg'>{name}</h3>
    <h4 className='font-bold'>⭐{avgRating}</h4>
    <p>{cuisines.join(", ")}</p>
    <p>{areaName}</p>
    </div>
    
    </div>
  )
}

export default ResContainer
