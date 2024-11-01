import React from 'react'
import InfoHeader from './InfoHeader'

export const CustomCard = () => {
  return (
    <div style={{border: "1px solid #EBF5FD", boxShadow: "2px 2px 8px 0px #ABABAB29", borderRadius:"10px"}}>
        <InfoHeader iconName={"Parents"} title={"Parent Information"} size={20}/>
    </div>
  )
}
