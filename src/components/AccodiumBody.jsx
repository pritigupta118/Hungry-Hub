import React from 'react'
import { RES_LOGO } from '../utility/constants'

const AccodiumBody = ({items}) => {
 
  return (
    <div>
      {items.map((item) =>
      <div key={item?.card?.info?.id} className='text-left border-b-2 p-4 flex justify-between'>
      <div className='w-6/12 md:w-9/12'>
      <h1 className='font-bold'>{item?.card?.info?.name}</h1>
        <h3 className='font-semibold text-sm mt-2'>₹{item?.card?.info?.price/100}</h3>
        <p className='mt-2 text-sm font-bold text-yellow-500'>⭐{item?.card?.info?.ratings?.aggregatedRating?.rating}</p>
        <p className='text-gray-500 text-sm mt-4'>{item?.card?.info?.description}</p>
        </div>
        <div className='w-6/12 md:w-3/12 items-center flex flex-col gap-2 sm:gap-0'>
          <img src={RES_LOGO + item?.card?.info?.imageId} className='w-full rounded-lg p-0 sm:p-4' />
         
          <button className='shadow-lg text-green-500 font-semibold text-sm rounded-lg bg-slate-200 px-8 md:px-6 py-2'>ADD</button>
          
          
        </div> 
      </div>)}
    </div>
  )
}

export default AccodiumBody
