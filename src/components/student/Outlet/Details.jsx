import React from 'react'
import { CustomCard } from '../../CustomCard'

export const Details = ({isTeacher}) => {
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
    "profileDetails":[
      {
        fathersName:"Born",
        mothersName:"Born",
        dob:"22/11/2002",
        martialStatus:"Single",
        qualification:"BBA",
        experience:"2 years"
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
      "address": "228, Avvai Shanmugam Salai, Ganapathy Colony, Gopalapuram, Chennai, Tamil Nadu 600086",
      "phoneNumber":"322433523"
    }],
    "bankDetails": [{
      "accountName": "Glenn Maxwell",
      "bankName":"Australian Bank",
      "branch":"Sydney",
      "accountNumber": "1234567890",
      "ifscCode": "SYD2142412412"
    }]
  }
  const addressColumn = {"Previous School Name":"name", "School Address":"address", "Phone Number":"phoneNumber"}
  const bankDetailsColumn = {"Account Name":"accountName", "Bank Name":"bankName", "Branch":"branch", "Account Number":"accountNumber","IFSC Code": "ifscCode"}
  const teacherDetailsColumn = {"Father's Name":"fathersName", "Mother's Name":"mothersName", "DOB":"dob","Martial Status":"martialStatus","Qualification": "qualification", "Experience":"experience"}

  return (
    <div className='d-flex flex-column gap-4'>
      {
        isTeacher 
        ? <CustomCard iconName={"School"} title={"Profile Details"} label={"School"} data={data["profileDetails"]} columns={teacherDetailsColumn} />
        : <CustomCard iconName={"Parents"} title={"Parents Information"} label={"parents"} data={data["parents"]} />
      }
      <div className='document-section'>
        <CustomCard iconName={"Documents"} title={"Documents"} label={"Documents"} data={data["documents"]} />
        <CustomCard iconName={"Address"} title={"Address"} label={"Address"} data={data["address"]}/>
      </div>
      <CustomCard iconName={"School"} title={"Previous School Details"} label={"School"} data={data["previousSchool"]} columns={addressColumn} />
      {
        isTeacher &&
        <CustomCard iconName={"School"} title={"Bank Details"} label={"School"} data={data["bankDetails"]} columns={bankDetailsColumn} />
      }

    </div>
  )
}
