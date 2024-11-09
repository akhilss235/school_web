import React, { useState } from "react";
import { Table, Row, Col, Dropdown } from "react-bootstrap";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaRegEdit } from "react-icons/fa";
import { IoCalendarOutline } from "react-icons/io5";
import Search from "../../filter/Search";
import NewSubject from "../../Model/NewSubject";
import BasicBreadcrumbs from "../../components/BasicBreadcrumbs";
import StaticFilter from "../../filter/StaticFilter";
import DropdownFilter from "../../filter/DropdownFilter";

export const ScheduleExam = () => {
  const [selectedLeaveType, setSelectedLeaveType] = useState("");

  const filterOptions = [
    { label: "Class", options: ["All", "Class 1", "Class 2", "Class 3"] },
    { label: "Section", options: ["All", "A", "B", "C"] },
  ];

  const inputData = [
    {
      id: 1,
      name: "Exam Name",
      type: "input",
    },
    [
        {
          id: 2,
          name: "Start Date",
          type: "date",
        },
        {
          id: 3,
          name: "End Date",
          type: "date",
        },
    ],
    {
        id: 4,
        name: "Duration",
        type: "input",
        value:["hours", "minutes"]
    },
    [
        {
          id: 5,
          name: "Start Time",
          type: "input",
        },
        {
          id: 6,
          name: "End Time",
          type: "input",
        },
    ],

  ];
  const handleLeaveTypeChange = (event) => {
    setSelectedLeaveType(event.target.value);
  };
  const handlePageChange = (page) => {
    // setCurrentPage(page);
  };
  return (
    <div className="p-3">
      <div className="text-start mb-3">
        <h4>
          <b>Schedule Exam</b>
        </h4>
        <BasicBreadcrumbs />
      </div>

      <Row
        className="justify-content-end mb-4"
        style={{ backgroundColor: "#FFFFFF" }}
      >
        <Col xs={12} md={8} lg={6} className="d-flex flex-wrap gap-1">
          <div className="me-3 mb-2 mb-md-0">
            <StaticFilter />
          </div>
          <div className="d-flex flex-row gap-2">
            {
              filterOptions.map((item)=>(
                <DropdownFilter
                  filterOptions={item}
                  selectedOption={selectedLeaveType}
                  handleOptionChange={handleLeaveTypeChange}
                />
              ))
            }
          </div>
        </Col>
        <Col
          xs={12}
          md={4}
          lg={6}
          className="d-flex justify-content-md-end mt-2 mt-md-0"
        >
          <Search />
        </Col>
      </Row>

      <div className="table-responsive" style={{ backgroundColor: "#FFFFFF" }}>
        <Table responsive>
          <thead style={{ color: "#505050" }}>
            <tr>
              <th>Class</th>
              <th>Section</th>
              <th>No. of Subjects</th>
              <th>No. of Students</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>I</td>
              <td>A</td>
              <td>06</td>
              <td>50</td>
              <td>
                <Dropdown>
                  <Dropdown.Toggle variant="link" bsPrefix="p-0">
                    {" "}
                    {/* Removes default button styling */}
                    <BsThreeDotsVertical />
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item
                      href="#/view"
                      style={{ borderBottom: "1px solid #D1D1D1" }}
                    >
                      <FaRegEdit className="me-2" /> Edit
                    </Dropdown.Item>
                    <Dropdown.Item
                      style={{
                        borderBottom: "1px solid #D1D1D1",
                      }}
                    >
                      <IoCalendarOutline className="me-2" /> Schedule Exam
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};
