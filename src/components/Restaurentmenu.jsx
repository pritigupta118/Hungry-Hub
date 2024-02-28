import React from 'react'
import { useParams } from 'react-router-dom'
import useRestaurentInfo from '../utility/useRestaurentInfo'
import Accodium from './Accodium'

const Restaurentmenu = () => {
  
const {resId} = useParams()
const restaurentInfo = useRestaurentInfo(resId);

if(restaurentInfo === null)  return <p>Loading🤔🤔.....</p>

const {name, cuisines, areaName, 
  costForTwoMessage} = restaurentInfo?.data?.cards[2]?.card?.card?.info
console.log(restaurentInfo?.data?.cards[2]?.card?.card?.info);
const {itemCards} = restaurentInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card

const categories = restaurentInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")

console.log(categories);
  return (
    <div className='flex flex-col justify-center items-center py-6'>
   <div className='mb-4'>
   <h1 className='text-2xl font-bold mb-3'>{name}</h1>
      <h2 className='text-gray-500 text-sm'>{cuisines.join(", ")}</h2>
      <h2 className='text-gray-500 text-sm'>{areaName}</h2>
      <p className='flex text-gray-500 text-xs md:text-sm my-3'><img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_18,h_18/v1648635511/Delivery_fee_new_cjxumu" alt="" />Order above 149 for discounted delivery fee</p>
      <p className='font-bold'>{costForTwoMessage}</p>
   </div>
    {categories.map((c, index) => (<Accodium key={c?.card?.card?.title} data={c?.card?.card} />))}
   
    </div>
  )
}
export default Restaurentmenu
