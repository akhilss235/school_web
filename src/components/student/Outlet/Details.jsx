import React from 'react'
import { CustomCard } from '../../CustomCard'

export const Details = () => {
  const data = {
    "parents": [
      {
        "name": "Thomas",
        "status":"Father",
        "relation": "Father",
        "phone": "+91 90876 54321",
        "email": "thomas@gmail.com",
        "photoUrl": "path/to/photo.jpg"
      },
      {
        "name": "Eliana Thomas",
        "relation": "Mother",
        "phone": "+91 98076 54121",
        "email": "eliana@gmail.com",
        "photoUrl": "path/to/photo.jpg"
      },
      {
        "name": "Eliana Thomas",
        "relation": "Guardian (Mother)",
        "phone": "+91 98076 54121",
        "email": "eliana@gmail.com",
        "photoUrl": "path/to/photo.jpg"
      }
    ],
    "documents": [
      {
        "name": "Birth Certificate",
        "downloadUrl": "path/to/birth-certificate.pdf"
      },
      {
        "name": "Transfer Certificate",
        "downloadUrl": "path/to/transfer-certificate.pdf"
      }
    ],
    "address": [{
      "current": "TT Krishnamachari Rd, Alwarpet, Chennai, Tamil Nadu 600018, India",
      "permanent": "TT Krishnamachari Rd, Alwarpet, Chennai, Tamil Nadu 600018, India"
    }],
    "previousSchool": [{
      "name": "National Public School",
      "address": "228, Avvai Shanmugam Salai, Ganapathy Colony, Gopalapuram, Chennai, Tamil Nadu 600086"
    }]
  }
  const addressColumn = {"Previous School Name":"name", "School Address":"address"}

  return (
    <div className='d-flex flex-column gap-4'>
      <CustomCard iconName={"Parents"} title={"Parents Information"} label={"parents"} data={data["parents"]} />
      <div className='d-flex flex-row gap-3'>
        <CustomCard iconName={"Documents"} title={"Documents"} label={"Documents"} data={data["documents"]} />
        <CustomCard iconName={"Address"} title={"Address"} label={"Address"} data={data["address"]}/>
      </div>
      <CustomCard iconName={"School"} title={"Previous School Details"} label={"School"} data={data["previousSchool"]} columns={addressColumn} />
    </div>
  )
}
