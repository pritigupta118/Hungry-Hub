import React, { useEffect, useState } from 'react'
import ResContainer from './ResContainer'
import { Link } from 'react-router-dom';

const Restaurents = () => {
  const [listOfRes, setListOfRes] = useState([]);
  const [filteredRestaurent, setFilteredRestaurent] = useState([]);
  const [searchText, setSearchText] = useState("");

useEffect(()=>{
fetchData()
},[])

const fetchData = async () => {
  const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.5200566&lng=88.73977719999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")

  const json = await data.json()
  console.log(json)

  setListOfRes(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.
    restaurants)
    setFilteredRestaurent(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.
      restaurants)
}

const handleButtonClick = () =>{
  console.log("button clicked")
}

if(listOfRes.length ===0 ) return <p>Loading...</p>;

  return (
    <div className='flex justify-center align-middle items-center'>
    <div className='w-9/12 m-auto flex flex-col justify-center items-center'>
    <div className='flex justify-between w-full my-4'>
    <div>
      <input className='bg-gray-200 p-2 rounded' type="text" value={searchText} onChange={(e) => {
        setSearchText(e.target.value)
      }}/>
      <button className='bg-orange-400 p-2 ml-2 rounded text-gray-700 font-semibold' onClick={() => {
        console.log(searchText)

        const filteredRes = listOfRes.filter((res) => res?.info?.name.toLowerCase().includes(searchText.toLowerCase()));

        setFilteredRestaurent(filteredRes)
      }}>Search</button>
    </div>
    
      <button className='bg-orange-400 p-3 rounded text-gray-700 font-semibold' onClick={() =>{
        const topRatedRes = filteredRestaurent.filter((res) => res?.info?.avgRating >= 4)
        setFilteredRestaurent(topRatedRes)
      }}>Top Rated Restaurent</button>
    </div>
      <div className='grid sm:grid-cols-2 md:grid-cols-4 gap-6'>
       {filteredRestaurent.map((res)=>(<Link key={res?.info?.id} to={"/browse/restaurent/" + res?.info?.id}><ResContainer resData={res}/></Link>))}
      </div>
    </div>

    </div>
  )
}

export default Restaurents