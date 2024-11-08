import React, { useState } from "react";
import CustomTable from "./CustomTable";
import { Row, Col } from "react-bootstrap"; // Import Dropdown
import StaticFilter from "../../../../filter/StaticFilter";
import Search from "../../../../filter/Search";
import { GetDate } from "../../../../filter/Date";
import DropdownFilter from "./DropdownFilter";

export const Fees = () => {
  const [filters, setFilters] = useState({
    academicYear: "",
    paymentMode: "",
  });

  const filterConfigs = [
    {
      label: "Academic Year",
      options: ["2023/2024", "2024/2025"],
      name: "academicYear",
    },
    {
      label: "Mode",
      options: ["All", "Cash", "Cheque", "Online"],
      name: "paymentMode",
    },
  ];

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
  ];

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilters((prevValues) => ({ ...prevValues, [name]: value }));
  };

  return (
    <div>
      <Row className="text-start mb-3 gy-3">
        <Col xs={'auto'}>
          <h4 className="m-0 mt-1">
            <b >Fees</b>
          </h4>
        </Col>
        <Col xs={"auto"}>
          <DropdownFilter
            filterOptions={{
              label: filterConfigs[0].label,
              options: filterConfigs[0].options,
            }}
            name={filterConfigs[0].name}
            selectedOption={filters[filterConfigs[0].name]}
            handleOptionChange={handleFilterChange}
          />
        </Col>
        <Col xs={"auto"}>
          <StaticFilter />
        </Col>
        <Col xs={"auto"}>
          <DropdownFilter
            filterOptions={{
              label: filterConfigs[1].label,
              options: filterConfigs[1].options,
            }}
            name={filterConfigs[1].name}
            selectedOption={filters[filterConfigs[1].name]}
            handleOptionChange={handleFilterChange}
          />
        </Col>
        <Col sm={"auto"} className="d-flex flex-wrap gap-3">
          <div className="" style={{ minWidth: "200px" }}>
            <GetDate title="From" />
          </div>
          <div style={{ minWidth: "200px" }}>
            <GetDate title="To" />
          </div>
        </Col>
        <Col xs={'auto'}>
          <Search />
        </Col>
      </Row>
      <Row className="mb-3 gy-3">

      </Row>
      <div>
        <CustomTable headers={headers} data={datas} />
      </div>
    </div>
  );
};
