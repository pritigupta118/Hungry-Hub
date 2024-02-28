import React, { useEffect, useState } from 'react'

const useListOfRes = () => {
  const [listOfRes, setListOfRes] = useState([]);
  useEffect(()=>{
    fetchData()
    },[])
    
    const fetchData = async () => {
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.5200566&lng=88.73977719999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    
      const json = await data.json()
     
    
      setListOfRes(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.
        restaurants)
    }
  return listOfRes
}

export default useListOfRes
