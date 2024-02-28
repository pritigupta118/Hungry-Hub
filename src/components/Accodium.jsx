import React, { useState } from 'react'
import AccodiumBody from './AccodiumBody'

const Accodium = ({data}) => {
const [showAccodium, setShowAccodium] = useState(false)
const handleAccodium = () =>{
  setShowAccodium(!showAccodium)
}
 
  return (
    <div className='w-full sm:w-7/12 mx-auto my-4 bg-gray-50 p-4'>
    <div className='flex justify-between cursor-pointer' onClick={handleAccodium}>
    <span className='font-bold text-lg'>{data?.title} ({data?.itemCards.length})</span>
     {showAccodium ? "▲": "▼"}
    </div>
   {showAccodium && <AccodiumBody items={data?.itemCards}/>}
     
    </div>
  )
}

export default Accodium
