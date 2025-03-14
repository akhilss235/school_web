// AttendanceIcon.js
import React from 'react';
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { IoCloseCircleOutline } from "react-icons/io5";
import { PiCircleHalfFill } from "react-icons/pi";
import { BsCircleHalf } from "react-icons/bs";
import holidayicon from "../../../../img/holidayimage.png"
import { BsClockHistory } from "react-icons/bs";

const AttendanceIcon = ({ type, label }) => {
    // const addData = 
    //     {
    //       id: 1,
    //       icon: "Holiday",
    //       title: "265",
    //       value: "No.of Days Present",
    //     }

  const getIcon = () => {
    switch (type) {
      case 'present':
        return <IoCheckmarkCircleOutline size={20} style={{ color: 'green' }} />;
      case 'absent':
        return <IoCloseCircleOutline size={20}  style={{ color: 'red' }} />;
      case 'firstHalf':
        return <PiCircleHalfFill size={18}  style={{ color: '#E41DA5' }} />;
      case 'secondHalf':
        return <BsCircleHalf size={15}  style={{ color: '#A01494' ,marginLeft:'1.5px'}} />;
      case "late":
        return <BsClockHistory size={15} color='#E4AD1D' />
      case 'holiday':
        return <img src={holidayicon} alt="Holiday" style={{ width: "18px", height: "18px" }} />;
        // <span role="img" aria-label="Holiday">🌴</span>;         
        //  <IconCard data={[item]} />
        
      default:
        return null;
    }
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center'}}>
      {getIcon()}
      { label &&
      <span style={{ marginLeft: '5px' }}>{label}</span>}
    </div>
  );
};

export default AttendanceIcon;
