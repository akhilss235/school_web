import React from 'react'
import { StudentCard } from './StudentCard'
import "../../Styles/info.css"

export const Info = () => {
    const studentInfoKey = ["Roll No", "Gender", "Date of Birth", "Blood Group", "house", "Religion", "Category", "Caste", "Mother Tongue"]
    const studentInfoValue = ["001", "Male", "11/12/2000", "B+ve", "Theriyaathu", "Hindu", "BC", "Caste", "Tamil"]
    const data = {
        name:"enk peru illada",
        "number":"211241252",
        "status":"Active"
      }
  return (
    <div className='info'>
        <StudentCard isInfo={true} data={data}/>
        <p className='m-0 fw-semibold'  style={{fontSize:"18px"}}>Basic Information</p>
        <div className='d-flex flex-row gap-4'>
            <div className='d-flex flex-column gap-1'> 
                {
                    studentInfoKey.map((key, index) => (
                        <p className='m-0 fw-semibold' key={index}>{key}</p>
                    ))
                }
            </div>
            <div className='d-flex flex-column gap-1'> 
                {
                    studentInfoValue.map((key, index) => (
                        <p className='m-0' key={index}>{key}</p>
                    ))
                }
            </div>
        </div>
    </div>
  )
}
