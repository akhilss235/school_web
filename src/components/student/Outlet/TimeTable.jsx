import React, { useEffect } from 'react'
import { OutletTab } from './OutletTab'
import { Class } from './Class'
import { useDispatch, useSelector } from 'react-redux'
import { changeTab, selectTab } from '../../../features/student/tabSlice'

export const TimeTable = () => {
  
  const dispatch = useDispatch()
  const items = ["Class Time Table", "Exam Time Table"]

  useEffect(()=>{
      dispatch(changeTab(items[0]))
  },[dispatch])

  const {isVisible, selectedTab} = useSelector(selectTab)

  return (
    <div className='d-flex flex-column gap-3'>
      <OutletTab columns={items} />
      <div className={`d-flex flex-row gap-3 align-items-center icon-card-container ${isVisible ? 'icon-card-visible' : ''}`}>
          {
            selectedTab === "Class Time Table"
            ? <Class />
            : <p>Hello mr thamaraikannan</p>
          }
      </div>
    </div>
  )
}
