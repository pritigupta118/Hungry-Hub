import React, { useEffect, useState } from 'react'
import ResContainer from './ResContainer'
import { Link } from 'react-router-dom';
import useListOfRes from '../utility/useListOfRes';


const Restaurents = () => {
  const [filteredRestaurent, setFilteredRestaurent] = useState([]);
  const [searchText, setSearchText] = useState("");
  const listOfRes = useListOfRes()
  useEffect(()=>{
    fetchData()
    },[])

    const fetchData = async () => {
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.5200566&lng=88.73977719999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    
      const json = await data.json()
     console.log(json);
    
        setFilteredRestaurent(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.
          restaurants)
    }

if(listOfRes.length ===0 ) return <p>Loading...</p>;

  return (
    // <div className='flex justify-center align-middle items-center'>
    <div className='w-9/12 m-auto flex flex-col justify-center items-center'>
    <div className='flex flex-col  sm:flex-row justify-start sm:justify-between w-full my-4 items-center'>
    <div className='flex flex-row'>
      <input className='bg-gray-200 md:p-2 rounded' type="text" value={searchText} onChange={(e) => {
        setSearchText(e.target.value)
      }}/>
      <button className='bg-orange-400 p-[3px] sm:p-2 ml-[2px] sm:ml-2 rounded text-gray-700 font-semibold' onClick={() => {
     

        const filteredRes = listOfRes.filter((res) => res?.info?.name.toLowerCase().includes(searchText.toLowerCase()));

        setFilteredRestaurent(filteredRes)
      }}>Search</button>
    </div>
    
      <button className='bg-orange-400 p-[8px] sm:p-3 mt-2 sm:mt-0 rounded text-gray-700 font-semibold' onClick={() =>{
        const topRatedRes = filteredRestaurent.filter((res) => res?.info?.avgRating >= 4)
        setFilteredRestaurent(topRatedRes)
      }}>Top Rated Restaurent</button>
    </div>
      <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-6 flex-wrap'>
       {filteredRestaurent.map((res)=>(<Link key={res?.info?.id} to={"/browse/restaurent/" + res?.info?.id}><ResContainer resData={res}/></Link>))}
      </div>
    </div>

    // </div>
  )
}

export default Restaurents
