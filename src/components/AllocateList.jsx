import React, { useState } from 'react';
import { Button, Col, Dropdown, Row, Table } from "react-bootstrap";
import StaticFilter from "../filter/StaticFilter";
import DropdownFilter from "../filter/DropdownFilter";
import Search from "../filter/Search";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdOutlineDeleteOutline } from "react-icons/md";
import NewSubject from "../Model/NewSubject";
import { useNavigate } from 'react-router-dom';
import { FaRegEdit } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";


export const AllocateList = () => {
const [modalShow, setModalShow] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);
  const [selectedLeaveType, setSelectedLeaveType] = useState("");


  const filterOptions = [
    { label: "Class", options: ["All", "Class 1", "Class 2", "Class 3"] },
    { label: "Section", options: ["All", "A", "B", "C"] }
  ];

  const handleApplyFilters = (filters) => {
    console.log("Applied Filters:", filters);
  };
  const navigate = useNavigate();

  function ShiftClass () {
    navigate("Shift class");
  }
  const handleLeaveTypeChange = (event) => {
    setSelectedLeaveType(event.target.value);
  };
  const inputData = [
    [
      {
        id: 1,
        name:"Class",
        type:"select",
        value:["I", "II", "III", "IV", "V", "VI", "VII"],
      },
      {
        id: 2,
        name:"Section",
        type:"select",
        value:["A", "B", "C"],
      }
    ],
    {
      id: 3,
      name:"No. of Students",
      type:"input",
    },
    [
      {
        id: 4,
        name:"Room Number",
        type:"input",
        sameRow:true
      },
      {
        id: 5,
        name:"Capacity",
        type:"input",
      }
    ],
  ]
  return (
    <div>
      <Row
        className="align-items-center mb-4"
        style={{ backgroundColor: "#FFFFFF" }}
      >
        <Col xs={12} md={8} lg={6} className="d-flex flex-wrap gap-2">
          <div className="me-3 mb-2 mb-md-0">
            <StaticFilter />
          </div>
          <div className="d-flex flex-row gap-2">
            {filterOptions.map((item) => (
              <DropdownFilter
                filterOptions={item}
                selectedOption={selectedLeaveType}
                handleOptionChange={handleLeaveTypeChange}
              />
            ))}
          </div>
        </Col>

        <Col
          xs={12}
          md={4}
          lg={6}
          className="d-flex justify-content-md-end mt-2 mt-md-0"
        >
          <Search />
          <Button
            variant="#148CF0"
            style={{ backgroundColor: "#148CF0", color: "#FFFFFF" }}
            className="ms-3"
            onClick={() => setModalShow(true)}
          >
            <FiPlus /> Add Student
          </Button>
        </Col>
      </Row>

      <div className="table-responsive" style={{ backgroundColor: "#FFFFFF" }}>
        <Table responsive>
          <thead style={{ color: "#505050" }}>
            <tr>
              <th>Class</th>
              <th>Section</th>
              <th>No. of Students</th>
              <th>Room Number</th>
              <th>Capacity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>I</td>
              <td>A</td>
              <td>30</td>
              <td>101</td>
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
                      onClick={ShiftClass}
                      style={{
                        borderBottom: "1px solid #D1D1D1",
                        color: "#148CF0",
                      }}
                    >
                      <MdOutlineDeleteOutline className="me-2" /> Shift Room
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="#/delete"
                      style={{ color: "red" }}
                      onClick={() => setModalDelete(true)}
                    >
                      <MdOutlineDeleteOutline className="me-2" /> Delete
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
      <NewSubject
        show={modalShow}
        onHide={() => setModalShow(false)}
        data={inputData}
        title={"Allocate Class Room"}
        btnTitle={"Allocate Room"}
      />
      <NewSubject
        show={modalDelete}
        onHide={() => setModalDelete(false)}
        title={"Delete Class Room"}
        isDelete={true}
        label={"delete the class room"}
        btnTitle={"Delete"}
      />
    </div>
  );
};
