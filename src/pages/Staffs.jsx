import React, { useState } from "react";
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
import StLoginDetails from "../Model/StLoginDetails";
import StInactivate from "../Model/StInactivate";
import NewSubject from "../Model/NewSubject";

function Staffs() {
  const [modalShow, setModalShow] = useState(false);
  const [modalInactivate, setModalInactivate] = useState(false);

  const data = {
    name:"enk peru illada",
    "number":"211241252",
  }

  const filterOptions = [
    { label: "Department", options: ["All", "Admin", "Management", "Management"] },
    { label: "Designation", options: ["All", "Technical Head", "Accounts Manager", "Receptionist"] },
    { label: "Gender", options: ["All", "Male", "Female"] },
    { label: "Status", options: ["All", "Active", "Inactive"] },
  ];

  const handleApplyFilters = (filters) => {
    console.log("Applied Filters:", filters);
  };
  const navigate = useNavigate();

  function AddStaff() {
    navigate("/Staffs/Add Staff");
  }

  function ViewStudent() {
    navigate("Teachers/Details");
  }
  return (
    <div className="p-3">
      <div className="text-start mb-3">
        <h4>
          <b>Staffs</b>
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
            onClick={AddStaff}
          >
            <FiPlus /> Add Staff
          </Button>
        </Col>
      </Row>

      <div className="table-responsive" style={{ backgroundColor: "#FFFFFF" }}>
        <Table responsive>
          <thead style={{ color: "#505050" }}>
            <tr>
              <th>Staff ID</th>
              <th>Staff Name</th>
              <th>Department</th>
              <th>Designation</th>
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
                      href="/staffs/Details/Salary"
                      style={{ borderBottom: "1px solid #D1D1D1" }}
                    >
                      <LiaEyeSolid className="me-2" /> View Teacher
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="#/view"
                      style={{ borderBottom: "1px solid #D1D1D1" }}
                    >
                      <FaRegEdit className="me-2" /> Edit
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={() => setModalShow(true)}
                      style={{ borderBottom: "1px solid #D1D1D1" }}
                    >
                      <CiLock className="me-2" /> Login Details
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
      <StLoginDetails show={modalShow} onHide={() => setModalShow(false)} />
      <StInactivate
        className="custom-modal"
        show={modalInactivate}
        onHide={() => setModalInactivate(false)}
      />
      <NewSubject show={modalInactivate}  onHide={() => setModalInactivate(false)} data={data} isInactive={true} title={"Inactive Staff"} label={"inactive the staff"} btnTitle={"Inactivate"}/>
    </div>
  );
}


export default Staffs