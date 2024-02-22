import React from 'react'
import { RES_LOGO } from '../utility/constants'

const ResContainer = (props) => {
  const {resData} = props

  const {cloudinaryImageId, name, avgRating, deliveryTime,cuisines, areaName} = resData?.info
  return (
    <div>
    <div className='w-[250px] p-4'>
    <img className='rounded-2xl w-[234px] h-[180px]' src={RES_LOGO + cloudinaryImageId} alt="res-img" />
    
    <div className='p-2'>
    <h3 className='font-bold text-lg'>{name}</h3>
    <h4 className='font-bold'>⭐{avgRating} • <span>{deliveryTime} mins</span></h4>
    <p>{cuisines}</p>
    <p>{areaName}</p>
    </div>
    </div>
    </div>
  )
}

export default ResContainer
