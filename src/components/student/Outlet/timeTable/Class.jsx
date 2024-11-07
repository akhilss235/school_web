import React from "react";
import { ClassScheduleCard } from "../../../ClassScheduleCard";
import { Break } from "./Break";

export const Class = ({isTeacher}) => {
  const weekdays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const timeTableData = [
    {
      day: "Monday",
      classes: [
        { subject: "Maths", time: "9:00 AM - 10:00 AM", teacher: "Mr. Smith" },
        {
          subject: "Tamil",
          time: "10:15 AM - 11:15 AM",
          teacher: "Mrs. Johnson",
        },
        {
          subject: "Science",
          time: "11:30 AM - 12:30 PM",
          teacher: "Dr. Brown",
        },
        { subject: "Social", time: "1:00 PM - 2:00 PM", teacher: "Ms. Davis" },
        {
          subject: "English",
          time: "2:15 PM - 3:15 PM",
          teacher: "Mrs. Wilson",
        },
      ],
    },
    {
      day: "Tuesday",
      classes: [
        {
          subject: "Science",
          time: "9:00 AM - 10:00 AM",
          teacher: "Dr. Brown",
        },
        {
          subject: "Social",
          time: "10:15 AM - 11:15 AM",
          teacher: "Ms. Davis",
        },
        { subject: "Maths", time: "11:30 AM - 12:30 PM", teacher: "Mr. Smith" },
        {
          subject: "Tamil",
          time: "1:00 PM - 2:00 PM",
          teacher: "Mrs. Johnson",
        },
        {
          subject: "English",
          time: "2:15 PM - 3:15 PM",
          teacher: "Mrs. Wilson",
        },
      ],
    },
    {
      day: "Wednesday",
      classes: [
        {
          subject: "English",
          time: "9:00 AM - 10:00 AM",
          teacher: "Mrs. Wilson",
        },
        { subject: "Tamil", time: "10:15 AM - 11:15 AM", teacher: "Mr. Lee" },
        { subject: "Maths", time: "9:00 AM - 10:00 AM", teacher: "Mr. Smith" },
        {
          subject: "Tamil",
          time: "10:15 AM - 11:15 AM",
          teacher: "Mrs. Johnson",
        },
        {
          subject: "Social",
          time: "9:00 AM - 10:00 AM",
          teacher: "Mr. Taylor",
        },
      ],
    },
    {
      day: "Thursday",
      classes: [
        {
          subject: "Social",
          time: "9:00 AM - 10:00 AM",
          teacher: "Mr. Taylor",
        },
        {
          subject: "Science",
          time: "10:15 AM - 11:15 AM",
          teacher: "Ms. Martin",
        },
        { subject: "Maths", time: "9:00 AM - 10:00 AM", teacher: "Mr. Smith" },
        {
          subject: "Tamil",
          time: "10:15 AM - 11:15 AM",
          teacher: "Mrs. Johnson",
        },
        {
          subject: "Maths",
          time: "9:00 AM - 10:00 AM",
          teacher: "Mr. Anderson",
        },
      ],
    },
    {
      day: "Friday",
      classes: [
        {
          subject: "Social",
          time: "9:00 AM - 10:00 AM",
          teacher: "Mr. Taylor",
        },
        {
          subject: "Science",
          time: "10:15 AM - 11:15 AM",
          teacher: "Ms. Martin",
        },
        {
          subject: "Maths",
          time: "9:00 AM - 10:00 AM",
          teacher: "Mr. Anderson",
        },
        {
          subject: "English",
          time: "10:15 AM - 11:15 AM",
          teacher: "Mrs. Thompson",
        },
        { subject: "Maths", time: "9:00 AM - 10:00 AM", teacher: "Mr. Smith" },
      ],
    },
    {
      day: "Saturday",
      classes: [
        {
          subject: "Social",
          time: "9:00 AM - 10:00 AM",
          teacher: "Mr. Taylor",
        },
        {
          subject: "Science",
          time: "10:15 AM - 11:15 AM",
          teacher: "Ms. Martin",
        },
        {
          subject: "Maths",
          time: "9:00 AM - 10:00 AM",
          teacher: "Mr. Anderson",
        },
        {
          subject: "English",
          time: "10:15 AM - 11:15 AM",
          teacher: "Mrs. Thompson",
        },
        { subject: "Maths", time: "9:00 AM - 10:00 AM", teacher: "Mr. Smith" },
      ],
    },
  ];
  const teacherTimeTableData = [
    {
      day: "Monday",
      classes: [
        { 
            subject: "English", 
            time: "9:00 AM - 10:00 AM", 
            class: "III A",
            roomNo:"101"
        },
        { 
            subject: "English", 
            time: "9:00 AM - 10:00 AM", 
            class: "IV A",
            roomNo:"107"
        },
        { 
            subject: "English", 
            time: "9:00 AM - 10:00 AM", 
            class: "II A",
            roomNo:"90"
        },
        { 
            subject: "English", 
            time: "9:00 AM - 10:00 AM", 
            class: "I A",
            roomNo:"100"
        },
        { 
            subject: "English", 
            time: "9:00 AM - 10:00 AM", 
            class: "III B",
            roomNo:"102"
        },
      ],
    },
    {
      day: "Tuesday",
      classes: [
        { 
            subject: "English", 
            time: "9:00 AM - 10:00 AM", 
            class: "III A",
            roomNo:"101"
        },
        { 
            subject: "English", 
            time: "9:00 AM - 10:00 AM", 
            class: "IV A",
            roomNo:"107"
        },
        { 
            subject: "English", 
            time: "9:00 AM - 10:00 AM", 
            class: "II A",
            roomNo:"90"
        },
        { 
            subject: "English", 
            time: "9:00 AM - 10:00 AM", 
            class: "I A",
            roomNo:"100"
        },
        { 
            subject: "English", 
            time: "9:00 AM - 10:00 AM", 
            class: "III B",
            roomNo:"102"
        },
      ],
    },
    {
      day: "Wednesday",
      classes: [
        { 
            subject: "English", 
            time: "9:00 AM - 10:00 AM", 
            class: "III A",
            roomNo:"101"
        },
        { 
            subject: "English", 
            time: "9:00 AM - 10:00 AM", 
            class: "IV A",
            roomNo:"107"
        },
        { 
            subject: "English", 
            time: "9:00 AM - 10:00 AM", 
            class: "II A",
            roomNo:"90"
        },
        { 
            subject: "English", 
            time: "9:00 AM - 10:00 AM", 
            class: "I A",
            roomNo:"100"
        },
        { 
            subject: "English", 
            time: "9:00 AM - 10:00 AM", 
            class: "III B",
            roomNo:"102"
        },
      ],
    },
    {
      day: "Thursday",
      classes: [
        { 
            subject: "English", 
            time: "9:00 AM - 10:00 AM", 
            class: "III A",
            roomNo:"101"
        },
        { 
            subject: "English", 
            time: "9:00 AM - 10:00 AM", 
            class: "IV A",
            roomNo:"107"
        },
        { 
            subject: "English", 
            time: "9:00 AM - 10:00 AM", 
            class: "II A",
            roomNo:"90"
        },
        { 
            subject: "English", 
            time: "9:00 AM - 10:00 AM", 
            class: "I A",
            roomNo:"100"
        },
        { 
            subject: "English", 
            time: "9:00 AM - 10:00 AM", 
            class: "III B",
            roomNo:"102"
        },
      ],
    },
    {
      day: "Friday",
      classes: [
        { 
            subject: "English", 
            time: "9:00 AM - 10:00 AM", 
            class: "III A",
            roomNo:"101"
        },
        { 
            subject: "English", 
            time: "9:00 AM - 10:00 AM", 
            class: "IV A",
            roomNo:"107"
        },
        { 
            subject: "English", 
            time: "9:00 AM - 10:00 AM", 
            class: "II A",
            roomNo:"90"
        },
        { 
            subject: "English", 
            time: "9:00 AM - 10:00 AM", 
            class: "I A",
            roomNo:"100"
        },
        { 
            subject: "English", 
            time: "9:00 AM - 10:00 AM", 
            class: "III B",
            roomNo:"102"
        },
      ],
    },
    {
      day: "Saturday",
      classes: [
        { 
            subject: "English", 
            time: "9:00 AM - 10:00 AM", 
            class: "III A",
            roomNo:"101"
        },
        { 
            subject: "English", 
            time: "9:00 AM - 10:00 AM", 
            class: "IV A",
            roomNo:"107"
        },
        { 
            subject: "English", 
            time: "9:00 AM - 10:00 AM", 
            class: "II A",
            roomNo:"90"
        },
        { 
            subject: "English", 
            time: "9:00 AM - 10:00 AM", 
            class: "I A",
            roomNo:"100"
        },
        { 
            subject: "English", 
            time: "9:00 AM - 10:00 AM", 
            class: "III B",
            roomNo:"102"
        },
      ],
    },
  ];

  const color = (subject) => {
    if(!isTeacher){
        return subject === "Maths"
          ? "#F40B36"
          : subject === "English"
          ? "#0030A8"
          : subject === "Tamil"
          ? "#288128"
          : subject === "Social"
          ? "#0D7A9C"
          : "#2589DA";
    }
    return "black"
  };

  const bg = (subject) => {
    if(!isTeacher){
        return subject === "Maths"
          ? "#FEE9ED"
          : subject === "English"
          ? "#F1F5FF"
          : subject === "Tamil"
          ? "#E8F8E8"
          : subject === "Social"
          ? "#E7F8FD"
          : "#E7F2FB";
    }
    return "white"
  };

  const maxClasses = Math.max(
    ...timeTableData.map((day) => day.classes.length)
  );

  const timeTable  = isTeacher ? teacherTimeTableData : timeTableData

  return (
    <div className="period-table-cont">
      <div className="d-flex flex-column  classtimetable">
        <div className="d-flex flex-column  time-table mb-5 p-2">
          <table>
            <thead>
              <tr>
                {weekdays.map((item, index) => (
                  <th
                    className="text-center"
                    style={{ width: "180px" }}
                    key={index}
                  >
                    {item}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: maxClasses }).map((_, rowIndex) => (
                <tr key={rowIndex}>
                  {timeTable.map((dayData, dayIndex) => (
                    <td key={dayIndex} className="text-center">
                      {dayData.classes[rowIndex] ? (
                        <div className="d-flex flex-column align-items-center p-2">
                          <ClassScheduleCard
                            data={dayData.classes[rowIndex]}
                            bg={bg(dayData.classes[rowIndex].subject)}
                            color={color(dayData.classes[rowIndex].subject)}
                            isTeacher={isTeacher}
                          />

                        </div>
                      ) : null}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Break />
      </div>
    </div>
  );
};
