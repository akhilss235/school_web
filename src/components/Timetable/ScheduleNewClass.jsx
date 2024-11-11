import React, { useState } from "react";
import BasicBreadcrumbs from "../BasicBreadcrumbs";
import { Button, Table, Row, Col, Dropdown } from "react-bootstrap";
import StaticFilter from "../../filter/StaticFilter";
import DropdownFilter from "../../filter/DropdownFilter";
import Search from "../../filter/Search";
import { FiPlus } from "react-icons/fi";
import { LiaEyeSolid } from "react-icons/lia";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDeleteOutline } from "react-icons/md";
import NewSubject from "../../Model/NewSubject";
import ClassTiming from "../ClassTiming";

function ScheduleNewClass() {
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
    <div >
      <Row>
        <Col>
          Schedule New Class
        </Col>
      </Row>
    </div>
  );
}

export default ScheduleNewClass;
