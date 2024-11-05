import React, { useState, useEffect } from "react";
import { Row, Col, Table } from 'react-bootstrap';
import AttendanceIcon from './AttendanceIcon'; // Make sure this component is defined with icons
import "./AttendanceDetails.css";

const AttendanceDetails = () => {
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const [attendanceData, setAttendanceData] = useState([]);

  useEffect(() => {
    const generateRandomStatus = () => {
      const statuses = ["present", "absent", "firstHalf", "secondHalf", "holiday"];
      return statuses[Math.floor(Math.random() * statuses.length)];
    };

    const fetchData = () => {
      const data = monthNames.map((month) => ({
        month,
        days: Array.from({ length: 31 }, () => ({
          status: generateRandomStatus(), // Randomly generated status for each day
        })),
      }));
      setAttendanceData(data);
    };
    fetchData();
  }, []);

  return (
    <div className="attendance-container">
      <Row className="attendance-row">
        <Col xs={'auto'} className="fixed-width-col py-3" style={{paddingLeft:'20px'}}><strong>Attendance</strong></Col>
        <Col xs={'auto'} className="py-3"><AttendanceIcon type="present" label="Present" /></Col>
        <Col xs={'auto'} className="py-3"><AttendanceIcon type="absent" label="Absent" /></Col>
        <Col xs={'auto'} className="py-3"><AttendanceIcon type="firstHalf" label="First Half" /></Col>
        <Col xs={'auto'} className="py-3"><AttendanceIcon type="secondHalf" label="Second Half" /></Col>
        <Col xs={'auto'} className="py-3"><AttendanceIcon type="holiday" label="Holiday" /></Col>
      </Row>

      <div className="table-responsive">
        <Table responsive hover>
          <thead style={{ color: "#505050" }}>

            {/* Attendance Row */}
            {/* <tr className="attendance-row">
              <th className="fixed-width-col">Attendance</th>
              <th className="icon-header">
                <AttendanceIcon type="present" label="Present" />
              </th>
              <th className="icon-header">
                <AttendanceIcon type="absent" label="Absent" />
              </th>
              <th className="icon-header">
                <AttendanceIcon type="firstHalf" label="First Half" />
              </th>
              <th className="icon-header">
                <AttendanceIcon type="secondHalf" label="Second Half" />
              </th>
              <th className="icon-header">
                <AttendanceIcon type="holiday" label="Holiday" />
              </th>
              {Array.from({ length: 25 }).map((_, i) => (
                <th key={`spacer-${i}`}></th>
              ))}
            </tr> */}
            {/* Date Row */}
            <tr>
              <th className="fixed-width-col">Date/Month</th>
              {Array.from({ length: 31 }, (_, i) => (
                <th key={i + 1}>{i + 1}</th>
              ))}
            </tr>
          </thead>
          <tbody>
          {attendanceData.map((attendance, index) => (
              <tr key={index}>
                <td className="fixed-width-col"><strong>{attendance.month}</strong></td>
                {attendance.days.map((day, i) => (
                  <td  key={i}>
                    {day.status === "present" && <AttendanceIcon type="present" label="" />}
                    {day.status === "absent" && <AttendanceIcon type="absent" label="" />}
                    {day.status === "firstHalf" && <AttendanceIcon type="firstHalf" label="" />}
                    {day.status === "secondHalf" && <AttendanceIcon type="secondHalf" label="" />}
                    {day.status === "holiday" && <AttendanceIcon type="holiday" label="" />}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default AttendanceDetails;
