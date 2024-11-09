import React, { useState } from "react";
import { Button, Table, Row, Col, Dropdown } from "react-bootstrap"; // Import Dropdown
import BasicBreadcrumbs from "../components/BasicBreadcrumbs";
import Search from "../filter/Search";
import { FiPlus } from "react-icons/fi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { GoDotFill } from "react-icons/go";
import { LiaEyeSolid } from "react-icons/lia";
import { FaRegEdit } from "react-icons/fa";
import { CiLock } from "react-icons/ci";
import { MdOutlineToggleOff } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import StInactivate from "../Model/StInactivate";
import StaticFilter from "../filter/StaticFilter";
import NewSubject from "../Model/NewSubject";
import { MdOutlineDeleteOutline } from "react-icons/md";
import Delete from "../Model/Delete";
import Subjectnactivate from "../Model/Subjectnactivate";


function Subjects() {
  const [modalShow, setModalShow] = useState(false);
  const [modalInactivate, setModalInactivate] = useState(false);
  const [modalDelete,setModalDelete ] = useState(false);
  const inputData = [
    {
      id:1,
      name:"Subject ID",
      type:"input",
    },
    {
      id:2,
      name:"Code",
      type:"input",
    },
    {
      id:1,
      name:"Subject Name",
      type:"input",
    },
    {
      id:1,
      name:"Subject Name",
      type:"select",
      value:["Theory", "Practical"]
    },
    
  ]


  const handleApplyFilters = (filters) => {
    console.log("Applied Filters:", filters);
  };
  const navigate = useNavigate();

  function AddStaff() {
    navigate("/Staffs/Add Staff");
  }


  return (
    <div className="p-3">
      <div className="text-start mb-3">
        <h4>
          <b>Subjects</b>
        </h4>
        <BasicBreadcrumbs />
      </div>

      <Row
        className="align-items-center mb-4"
        style={{ backgroundColor: "#FFFFFF" }}
      >
        <Col xs={12} md={8} lg={6} className="d-flex flex-wrap">
          <div className="me-3 mb-2 mb-md-0">
          <StaticFilter />
          </div>
          <div className="me-3 mb-2 mb-md-0">
            {/* <GetDate title="From" /> */}
          </div>
          <div className="me-3 mb-2 mb-md-0">
            {/* <GetDate title="To" /> */}
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
            <FiPlus /> New Subject
          </Button>
        </Col>
      </Row>

      <div className="table-responsive" style={{ backgroundColor: "#FFFFFF" }}>
        <Table responsive>
          <thead style={{ color: "#505050" }}>
            <tr>
              <th>Subject  ID</th>
              <th>Subject  Name</th>
              <th>Code</th>
              <th>Type</th>
          
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>20240015678</td>
              <td>Emma Thomas</td>
              <td>I</td>
            
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
           
                      style={{ borderBottom: "1px solid #D1D1D1" }}
                    >
                      <FaRegEdit className="me-2" /> Edit
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={() => setModalDelete(true)}
                      style={{ borderBottom: "1px solid #D1D1D1" }}
                    >
                      <MdOutlineDeleteOutline className="me-2" /> Delete
                    </Dropdown.Item>

                    <Dropdown.Item
                      href="#/delete"
                      style={{ color: "red" }}
                      onClick={() => setModalInactivate(true)}
                    >
                      <MdOutlineToggleOff className="me-2" /> Inactivate
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
      <NewSubject show={modalShow} onHide={() => setModalShow(false)} title={"New Subject"} data={inputData}/>
      <NewSubject show={modalInactivate} onHide={() => setModalInactivate(false)} title={"Inactivate Subject"} isInactive={true} label={"inactivate the subject"} btnTitle={"Inactivate"}/>
      <NewSubject show={modalDelete} onHide={() => setModalDelete(false)} title={"Delete Subject"} isDelete={true} label={"delete the subject"} btnTitle={"Delete"}/>
    </div>
  );
}


export default Subjects