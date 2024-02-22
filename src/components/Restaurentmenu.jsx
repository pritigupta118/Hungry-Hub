import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { MENU_API } from '../utility/constants'

const Restaurentmenu = () => {

const [restaurentInfo, setRestaurentInfo] = useState(null)
const {resId} = useParams()

useEffect(() => {
fetchMenu()
},[])

const fetchMenu = async () => {
  const data = await fetch (MENU_API + resId)

  const json = await data.json()
  console.log(json)
  setRestaurentInfo(json)
}

if(restaurentInfo === null)  return <p>Loading🤔🤔.....</p>

const {name, cuisines, areaName} = restaurentInfo?.data?.cards[2]?.card?.card?.info
const {itemCards} = restaurentInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card

console.log(itemCards);

  return (
    <div>
      <h1>{name}</h1>
      <h2>{cuisines.join(", ")}</h2>
      <h2>{areaName}</h2>
<ul>
{itemCards.map((item) => (<li key={item?.card?.info?.id}>{item?.card?.info?.name}</li>))}
</ul>
    </div>
  )
}

export default Restaurentmenu
