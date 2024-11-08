import React, { useState } from "react";
import CustomTable from "./CustomTable";
import { Row, Col } from "react-bootstrap"; // Import Dropdown
import StaticFilter from "./StaticFilter";
import Search from "../../../../filter/Search";
import { GetDate } from "../../../../filter/Date";
import DropdownFilter from "./DropdownFilter";

export const Fees = () => {
  const [selectedLeaveType, setSelectedLeaveType] = useState("");

  const filterOptions = {
    label: "Mode",
    options: ["All", "Cash", "Cheque", "Online"],
  };

  const headers = [
    { label: "Fees Type", key: "FeesType" },
    { label: "Date", key: "date" },
    { label: "Amount", key: "amount" },
    { label: "Mode", key: "mode" },
    { label: "Action", key: "action" },
  ];

  const datas = [
    {
      FeesType: "Monthly Fee (May)",
      date: "02/12/2024",
      amount: "Rs.5,000",
      mode: "Cash",
      action: "action",
    },
    {
      FeesType: "Exam Fee",
      date: "07/12/2023",
      amount: "Rs.2,000",
      mode: "Cheque",
      action: "action",
    },
    {
      FeesType: "Monthly fee (April)",
      date: "02/12/2024",
      amount: "Rs.2,500",
      mode: "Cheque",
      action: "action",
    },
    {
      FeesType: "Admission Fee",
      date: "07/12/2023",
      amount: "Rs.5,000",
      mode: "Cash",
      action: "action",
    },

    // Add more student objects as needed
  ];

  const handleValueChange = (event) => {
    setSelectedLeaveType(event.target.value);
  };

  return (
    <div>
      <Row className="text-start mb-3">
        <Col>
          <h4>
            <b>Leaves</b>
          </h4>
        </Col>
        <Col>
          <StaticFilter />
        </Col>
        <Col sm={"auto"} className="mb-3">
          <DropdownFilter
            filterOptions={filterOptions}
            selectedOption={selectedLeaveType}
            handleOptionChange={handleValueChange}
          />
        </Col>
      </Row>
      <Row className="mb-3">
        <Col sm={"auto"} className="d-flex flex-wrap">
          <div className="me-2 mb-3" style={{ minWidth: "200px" }}>
            <GetDate title="From" />
          </div>
          <div style={{ minWidth: "200px" }}>
            <GetDate title="To" />
          </div>
        </Col>
        <Col className="d-flex">
          <Search />
        </Col>
      </Row>
      <div>
        <CustomTable headers={headers} data={datas} />
      </div>
    </div>
  );
};
