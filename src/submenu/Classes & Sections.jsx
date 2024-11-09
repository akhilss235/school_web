import React, { useState } from 'react';
import { Button, Table, Row, Col, Dropdown } from "react-bootstrap"; // Import Dropdown
import BasicBreadcrumbs from "../components/BasicBreadcrumbs";
import Search from "../filter/Search";
import { FiPlus } from "react-icons/fi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineToggleOff } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import StLoginDetails from '../Model/StLoginDetails';
import StInactivate from '../Model/StInactivate';
import StaticFilter from '../filter/StaticFilter';
import { StatusTag } from '../components/StatusTag';
import { MdOutlineDeleteOutline } from "react-icons/md";
import DropdownFilter from '../filter/DropdownFilter';
import NewSubject from '../Model/NewSubject';

function ClassesSections() {
  const [modalShow, setModalShow] = useState(false);
  const [modalInactivate, setModalInactivate] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);
  const [selectedLeaveType, setSelectedLeaveType] = useState("");


  const filterOptions = [
    { label: "Class", options: ["All", "Class 1", "Class 2", "Class 3"] },
    { label: "Section", options: ["All", "Class 1", "Class 2", "Class 3"] },
    { label: "Status", options: ["All", "Active", "Inactive"] },
  ];

  const inputData = [
    {
      id:"1",
      name:"Class",
      type:"input"
    },
    {
      id:"2",
      name:"Section",
      type:"input"
    },
    {
      id:"3",
      name:"No. of Students",
      type:"input"
    },
  ]

  const handleApplyFilters = (filters) => {
    console.log("Applied Filters:", filters);
  };
  const navigate = useNavigate();

  function AddStudent () {
    navigate("/Students/Add Student");
  }
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
          <b>Classes & Sections</b>
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
            onClick={()=>setModalShow(true)}
          >
            <FiPlus /> New Class & Section
          </Button>
        </Col>
      </Row>

      <div className="table-responsive" style={{ backgroundColor: "#FFFFFF" }}>
        <Table responsive              >
          <thead style={{ color: "#505050" }}>
            <tr>
              <th>Class</th>
              <th>Section</th>
              <th>No of Students</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
            
              <td>I</td>
              <td>A</td>
              <td>50</td>
              <td style={{textAlign:"center", verticalAlign:"middle"}}>
                <StatusTag  status={"Inactive"}/>
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
      <NewSubject show={modalShow} onHide={() => setModalShow(false)} data={inputData} title={"Class & Section"} />
      <NewSubject show={modalInactivate} onHide={() => setModalInactivate(false)} isInactive={true} title={"Inactivate Class & Section"} label={'inactive the class & section'} btnTitle={"Inactivate"}/>
      <NewSubject show={modalDelete} onHide={() => setModalDelete(false)} title={"Delete Class & Section"} isDelete={true} label={"delete the class & section"} btnTitle={"Delete"}/>
    </div>
  );
}



export default ClassesSections