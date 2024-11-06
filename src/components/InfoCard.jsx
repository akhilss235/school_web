import React from 'react'
import { IconCard } from './IconCard'
import { StudentCard } from './student/StudentCard'

export const InfoCard = ({title, data, isStudentCard=false}) => {
  return (
    <div className='info'>
        <p className='m-0 fw-semibold' style={{fontSize:"18px"}}>{title}</p>
        {
            isStudentCard ?
              <StudentCard isInfo={false} data={data}/>
            : <IconCard data={data} />
        }
    </div>
  )
}
