import React, { useEffect, useState } from 'react'

export const useOutletHook = (columns) => {

    const [selectedTab, setSelectedTab] = useState()

    const handleChangeTab = (item)=>{
        setSelectedTab(item)
    }

    useEffect(()=>{
        setSelectedTab(columns[0])
    },[columns])

  return {
    selectedTab, 
    handleChangeTab
  }
}
