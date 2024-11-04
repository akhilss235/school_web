// src/components/Leaves.js
import React, { useEffect, useState } from "react";
import { Button, Table, Row, Col, Dropdown } from "react-bootstrap"; // Import Dropdown
import { OutletTab } from "../OutletTab";
import { useSelector } from "react-redux";
import Search from "../../../../filter/Search";
import Filter from "../../../../filter/Filter";
import { GetDate } from "../../../../filter/Date";
import DropdownFilter from "./DropdownFilter";
// import { selectTab } from '../../../features/student/tabSlice';

const Leaves = () => {
  const [selectedLeaveType, setSelectedLeaveType] = useState("");
  const filterOptions = {
    label: "Leave Type",
    options: [
      "All",
      "Medical Leave",
      "Casual Leave",
      "Maternity Leave",
      "Sick Leave",
    ],
  };

  const handleLeaveTypeChange = (event) => {
    setSelectedLeaveType(event.target.value);
  };

  return (
    <div className="mt-3">
      <Row className="text-start mb-3">
        <Col>
          <h4>
            <b>Leaves</b>
          </h4>
        </Col>
        <Col className="d-flex justify-content-md-end mt-2 mt-md-0">
          <Search />
        </Col>
      </Row>
      <Row
        className="justify-content-between"
        style={{ backgroundColor: "#FFFFFF" }}
      >
        <Col sm={"auto"}>
          <DropdownFilter
            filterOptions={filterOptions}
            selectedOption={selectedLeaveType}
            handleOptionChange={handleLeaveTypeChange}
          />
        </Col>
        <Col>
          <GetDate title="From" />
        </Col>
        <Col>
          <GetDate title="To" />
        </Col>
      </Row>
    </div>
  );
};

export default Leaves;
