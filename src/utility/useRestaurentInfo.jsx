import React, { useEffect, useState } from 'react'
import { MENU_API } from './constants'

const useRestaurentInfo = (resId) => {
  const [restaurentInfo, setRestaurentInfo] = useState(null)
  useEffect(() => {
    fetchMenu()
    },[])
    
    const fetchMenu = async () => {
      const data = await fetch (MENU_API + resId)
    
      const json = await data.json()
     
      setRestaurentInfo(json)
    }

    return restaurentInfo

}

export default useRestaurentInfo
