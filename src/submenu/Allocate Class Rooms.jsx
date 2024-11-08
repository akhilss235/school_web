import React, { useState } from 'react';
import { Button, Table, Row, Col, Dropdown } from "react-bootstrap"; // Import Dropdown
import BasicBreadcrumbs from "../components/BasicBreadcrumbs";
import Search from "../filter/Search";
import Filter from "../filter/Filter";
import { GetDate } from "../filter/Date";
import { FiPlus } from "react-icons/fi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { GoDotFill } from "react-icons/go";
import { LiaEyeSolid } from "react-icons/lia";
import { FaRegEdit } from "react-icons/fa";
import { CiLock } from "react-icons/ci";
import Promote from "../img/Promote.png";
import { MdOutlineToggleOff } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import StLoginDetails from '../Model/StLoginDetails';
import StInactivate from '../Model/StInactivate';

function AllocateClassRooms() {
  const [modalShow, setModalShow] = useState(false);
  const [modalInactivate, setModalInactivate] = useState(false);

  const filterOptions = [
    { label: "Class", options: ["All", "Class 1", "Class 2", "Class 3"] },
    { label: "Section", options: ["All", "A", "B", "C"] },
    { label: "Gender", options: ["All", "Male", "Female"] },
    { label: "Status", options: ["All", "Active", "Inactive"] },
  ];

  const handleApplyFilters = (filters) => {
    console.log("Applied Filters:", filters);
  };
  const navigate = useNavigate();

  function AddStudent () {
    navigate("/Students/Add Student");
  }
  
  function ViewStudent () {
    navigate("Students/Details");
  }
  return (
    <div >
      <div className="text-start mb-3">
        <h4>
          <b>Student List</b>
        </h4>
        <BasicBreadcrumbs />
      </div>

      <Row
        className="align-items-center mb-4"
        style={{ backgroundColor: "#FFFFFF" }}
      >
        <Col xs={12} md={8} lg={6} className="d-flex flex-wrap">
          <div className="me-3 mb-2 mb-md-0">
            <Filter
              filterOptions={filterOptions}
              onApply={handleApplyFilters}
            />
          </div>
          <div className="me-3 mb-2 mb-md-0">
            <GetDate title="From" />
          </div>
          <div className="me-3 mb-2 mb-md-0">
            <GetDate title="To" />
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
            onClick={AddStudent}
          >
            <FiPlus /> Add Student
          </Button>
        </Col>
      </Row>

      <div className="table-responsive" style={{ backgroundColor: "#FFFFFF" }}>
        <Table responsive              >
          <thead style={{ color: "#505050" }}>
            <tr>
              <th>Student ID</th>
              <th>Student Name</th>
              <th>Class</th>
              <th>Section</th>
              <th> DOB</th>
              <th>Gender</th>
              <th>Date Of Join</th>
              <th>Phone No.</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>20240015678</td>
              <td>Emma Thomas</td>
              <td>I</td>
              <td>A</td>
              <td>02/06/2012</td>
              <td>Female</td>
              <td>07/12/2024</td>
              <td>+91 90876 54331</td>
              <td style={{ color: "#16BE16" }}>
                <GoDotFill /> Active
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
                      href="Students/Details"
                      style={{ borderBottom: "1px solid #D1D1D1" }}
                    >
                      <LiaEyeSolid className="me-2" /> View Student
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="#/view"
                      style={{ borderBottom: "1px solid #D1D1D1" }}
                    >
                      <FaRegEdit className="me-2" /> Edit
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => setModalShow(true)} style={{ borderBottom: "1px solid #D1D1D1" }}>

                      <CiLock className="me-2" /> Login Details
                    </Dropdown.Item>

                    <Dropdown.Item
                      href="Students/Promote student"
                      style={{ borderBottom: "1px solid #D1D1D1" }}
                      
                    >
                      {" "}
                      <img
                        src={Promote}
                        alt="Logo"
                        className="me-3"
                        style={{ maxHeight: "40px" }}
                      />
                      Promote Student
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
      <StLoginDetails show={modalShow} onHide={() => setModalShow(false)} />
      <StInactivate show={modalInactivate} onHide={() => setModalInactivate(false)}/>
    </div>
  );
}



export default AllocateClassRooms