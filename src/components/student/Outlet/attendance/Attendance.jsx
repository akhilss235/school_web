import React from "react";
import { Button, Table, Row, Col, Dropdown } from "react-bootstrap"; // Import Dropdown
import { OutletTab } from "../OutletTab";
import Search from "../../../../filter/Search";
import Filter from "../../../../filter/Filter";
import { GetDate } from "../../../../filter/Date";
import DropdownFilter from "./DropdownFilter"; // Adjust the import path as necessary

export const Attendance = () => {
  const columns = ["Leaves", "Attendance"];

  const filterOptions = [
    {
      label: "Leave Type",
      options: [
        "All",
        "Medical Leave",
        "Casual Leave",
        "Maternity Leave",
        "Sick Leave",
      ],
    },
  ];

  const handleApplyFilters = (filters) => {
    console.log("Applied Filters:", filters);
  };

  return (
    <div>
      <OutletTab columns={columns} />

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
          <Col sm={2}>
            <Filter
              filterOptions={filterOptions}
              onApply={handleApplyFilters}
            />
          </Col>
          <Col>
            {filterOptions.map((filter, index) => (
              <DropdownFilter
                key={index}
                label={filter.label}
                options={filter.options}
                onChange={handleApplyFilters}
              />
            ))}
          </Col>
          <Col>
            <GetDate title="From" />
          </Col>
          <Col>
            <GetDate title="To" />
          </Col>
        </Row>
      </div>
    </div>
  );
};
