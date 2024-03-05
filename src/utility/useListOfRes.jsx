import React, { useEffect, useState } from 'react'
import { RES_API } from './constants';


const useListOfRes = () => {
  const [listOfRes, setListOfRes] = useState([]);
  useEffect(()=>{
    fetchData()
    },[])
    
    const fetchData = async () => {
      const data = await fetch(RES_API)
    
      const json = await data.json()
     
    
      setListOfRes(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.
        restaurants)
    }
  return listOfRes
}

export default useListOfRes
