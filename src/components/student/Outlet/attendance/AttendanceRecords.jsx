// src/components/Attendance.js
import React from "react";
import { IconCard } from "./IconCard";
import { Row, Col } from "react-bootstrap";
import AttendanceDetails from "./AttendanceDetails";
import "./Attendance.css";

const AttendanceRecords = ({isTeacher}) => {
  const attentanceData = [
    {
      id: 1,
      icon: "Present",
      title: "265",
      value: "No.of Days Present",
    },
    {
      id: 2,
      icon: "Absent",
      title: "265222",
      value: "No.of Days Present",
    },
    {
      id: 3,
      icon: "FirstHalf",
      title: "265",
      value: "No.of Days Present",
    },
  ];
  const teacherAttentanceData = [
    {
      id: 1,
      icon: "Present",
      title: "265",
      value: "No.of Days Present",
    },
    {
      id: 2,
      icon: "Absent",
      title: "265",
      value: "No.of Days Present",
    },
    {
      id: 3,
      icon: "FirstHalf",
      title: "265",
      value: "No.of Days Present",
    },
    {
      id: 3,
      icon: "Late",
      title: "265",
      value: "No.of Days Present",
    },
  ]
  const addData = isTeacher ? teacherAttentanceData : attentanceData
  return (
    <div className="attendancepage">
      <Row className="align-items-center text-break">
        {addData?.map((item) => (
          <Col
            xs={12}
            sm={4}
            className="mb-3"
            style={{ minWidth: "260px"}} 
            key={item.id}
          >
            <IconCard data={[item]} />
          </Col>
        ))}
      </Row>
      <Row>
        <Col>
          <AttendanceDetails isTeacher={isTeacher}/>
        </Col>
      </Row>
    </div>
  );
};

export default AttendanceRecords;
