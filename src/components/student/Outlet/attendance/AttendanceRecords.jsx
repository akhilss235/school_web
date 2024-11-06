// src/components/Attendance.js
import React from "react";
import { IconCard } from "./IconCard";
import { Row, Col } from "react-bootstrap";
import AttendanceDetails from './AttendanceDetails'; 

const AttendanceRecords = () => {
  const addData = [
    {
      id: 1,
      icon: "Present",
      title: "265",
      value: "No.of Days Present",
    },
    {
      id: 1,
      icon: "Absent",
      title: "265222",
      value: "No.of Days Present",
    },
    {
      id: 1,
      icon: "FirstHalf",
      title: "265",
      value: "No.of Days Present",
    },
  ];
  return (
    <div>
      <Row className="align-items-center text-break">
        {addData.map((item) => (
          <Col xs={12} sm={4} md={4} className="mb-3" style={{minWidth:'260px'}} key={item.id}>
            <IconCard data={[item]} />
          </Col>
        ))}
      </Row>
      <Row>
        <Col><AttendanceDetails/></Col>
      </Row>
    </div>
  );
};

export default AttendanceRecords;
