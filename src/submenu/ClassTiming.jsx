import React, { useState } from "react";
import BasicBreadcrumbs from "../components/BasicBreadcrumbs";
import { Button, Table, Row, Col, Dropdown } from "react-bootstrap";
import StaticFilter from "../filter/StaticFilter";
import DropdownFilter from "../filter/DropdownFilter";
import Search from "../filter/Search";
import { FiPlus } from "react-icons/fi";
import { LiaEyeSolid } from "react-icons/lia";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDeleteOutline } from "react-icons/md";
import {IconCard} from "../components/IconCard";

function ClassTiming() {
  const [modalShow, setModalShow] = useState(false);
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
    <div className="p-4 mb-3" style={{backgroundColor:'#EBF5FD',borderRadius:'10px'}}>
        <Row className="gy-3">
        {classTimingData?.map((item) => (
          <Col
            xs={12}
            sm={3}
            // className="mb-3"
            style={{ minWidth: "260px"}} 
            key={item.id}
          >
            <IconCard data={[item]} fill={'white'}/>
          </Col>
        ))}
        </Row>
    </div>
  );
}

export default ClassTiming;
