// src/components/Attendance.js
import React from "react";
import { IconCard } from "../../../IconCard";

const AttendanceRecords = () => {
  const addData = [
    {
        "id":1,
        "icon":"Location",
        "title":"265",
        "value": "No.of Days Present",
    }
    // {
    //     id:2,
    //     "icon":"Pin",
    //     "title":"Permanent Address",
    //     "value": data?.permanent,
    // }
  ]
  return (
    <div>
      <div className="f-flex flex-row align-items-center">
        <IconCard data={addData}/>
      </div>
    </div>
  );
};

export default AttendanceRecords;
