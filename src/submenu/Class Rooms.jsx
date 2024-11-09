import React, { useState } from 'react';
import { Button, Table, Row, Col, Dropdown } from "react-bootstrap"; // Import Dropdown
import BasicBreadcrumbs from "../components/BasicBreadcrumbs";
import Search from "../filter/Search";
import { FiPlus } from "react-icons/fi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineToggleOff } from "react-icons/md";
import NewSubject from '../Model/NewSubject';
import { MdOutlineDeleteOutline } from "react-icons/md";
import { StatusTag } from '../components/StatusTag';
import StaticFilter from '../filter/StaticFilter';
import DropdownFilter from '../components/student/Outlet/fees/DropdownFilter';

function ClassRooms() {
  const [modalShow, setModalShow] = useState(false);
  const [modalInactivate, setModalInactivate] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);
  const [selectedLeaveType, setSelectedLeaveType] = useState("");

  const filterOptions = [
    { label: "Type", options: ["All", "Class 1", "Class 2", "Class 3"] },
    { label: "Status", options: ["All", "Class 1", "Class 2", "Class 3"] },
  ];

  const handleApplyFilters = (filters) => {
    console.log("Applied Filters:", filters);
  };
  
  const inputData = [
    {
      id: 1,
      name:"Room Number",
      type:"input"
    },
    {
      id: 2,
      name:"Capacity",
      type:"input"
    },
  ]
  const handleLeaveTypeChange = (event) => {
    setSelectedLeaveType(event.target.value);
  };
  const handlePageChange = (page) => {
    // setCurrentPage(page);
  };
  return (
    <div >
      <div className="text-start mb-3">
        <h4>
          <b>Class Rooms</b>
        </h4>
        <BasicBreadcrumbs />
      </div>

      <Row
        className="align-items-center mb-4"
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
          <Button
            variant="#148CF0"
            style={{ backgroundColor: "#148CF0", color: "#FFFFFF" }}
            className="ms-3"
            onHide={() => setModalShow(true)} 
          >
            <FiPlus /> New Room
          </Button>
        </Col>
      </Row>

      <div className="table-responsive" style={{ backgroundColor: "#FFFFFF" }}>
        <Table responsive              >
          <thead style={{ color: "#505050" }}>
            <tr>
              <th>Room Number</th>
              <th>Capacity</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>101</td>
              <td >50</td>
              <td style={{textAlign:"center", verticalAlign:"middle"}}>
                <StatusTag status={"Active"} />
              </td>
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
                    <Dropdown.Item onClick={() => setModalDelete(true)} style={{ borderBottom: "1px solid #D1D1D1",color:"#148CF0"}}>
                      <MdOutlineDeleteOutline className="me-2" /> Delete
                    </Dropdown.Item>
                    <Dropdown.Item href="#/delete" style={{ color: "red" }}  onClick={() => setModalInactivate(true)}>
                      <MdOutlineToggleOff className="me-2" /> Inactivate
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
      <NewSubject show={modalShow} onHide={() => setModalShow(false)} data={inputData} title={"Class Room"} />
      <NewSubject show={modalInactivate} onHide={() => setModalInactivate(false)} isInactive={true} title={"Inactivate Room"} label={"inactivate the room"} btnTitle={"Inactivate"}  />
      <NewSubject show={modalDelete} onHide={() => setModalDelete(false)} title={"Delete Room"} isDelete={true} label={"delete the Room"} btnTitle={"Delete"}/>

    </div>
  );
}




export default ClassRooms