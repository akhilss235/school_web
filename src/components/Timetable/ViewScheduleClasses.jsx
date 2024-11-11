import React, { useState } from "react";
import { Button, Table, Row, Col, Dropdown } from "react-bootstrap";
import ClassTiming from "../ClassTiming";
import { Class } from "../../components/student/Outlet/timeTable/Class";

function ViewScheduleClasses() {
  const classTimingData = [
    {
      id: 1,
      icon: "classandsection",
      title: "Class & Section",
      value: "IV A",
    },
    {
      id: 2,
      icon: "startandendtime",
      title: "Start Time",
      value: "09:00 AM",
    },
    {
      id: 3,
      icon: "startandendtime",
      title: "End Time",
      value: "04:45 PM",
    },
    {
      id: 4,
      icon: "noofsubjects",
      title: "No. of Subjects",
      value: "08",
    },
  ];

  return (
    <div>
      <Row>
        <Col>
          <ClassTiming data={classTimingData} />
        </Col>
      </Row>
      <Row>
        <Col sm={12}>
          <Class isTeacher={false} />
        </Col>
      </Row>
    </div>
  );
}

export default ViewScheduleClasses;
