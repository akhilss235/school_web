import React, { useState } from "react";
import { Button, Table, Row, Col, Dropdown } from "react-bootstrap";
import { FiPlus } from "react-icons/fi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDeleteOutline } from "react-icons/md";
import Search from "../../filter/Search";
import NewSubject from "../../Model/NewSubject";
import BasicBreadcrumbs from "../../components/BasicBreadcrumbs";
import { StatusTag } from "../../components/StatusTag";

export const GradeSetting = () => {
  const [modalShow, setModalShow] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);

  const inputData = [
    {
      id: 1,
      name: "Grade",
      type: "input",
    },
    [
      {
        id: 2,
        name: "Range From",
        type: "input",
      },
      {
        id: 3,
        name: "Range To",
        type: "input",
      },
    ],
    {
      id: 4,
      name: "Grade points",
      type: "input",
    },
    {
      id:"5",
      name:"Result of the Grade",
      type:"radio",
      options:["Pass", "Fail"]
    }
  ];
  return (
    <div className="p-3">
      <div className="text-start mb-3">
        <h4>
          <b>Grade List</b>
        </h4>
        <BasicBreadcrumbs />
      </div>

      <Row
        className="justify-content-end mb-4"
        style={{ backgroundColor: "#FFFFFF" }}
      >
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
            <FiPlus /> New Grade
          </Button>
        </Col>
      </Row>

      <div className="table-responsive" style={{ backgroundColor: "#FFFFFF" }}>
        <Table responsive>
          <thead style={{ color: "#505050" }}>
            <tr>
              <th>Grade</th>
              <th>Range</th>
              <th>Grade Point</th>
              <th>Result</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>O+</td>
              <td>90-100</td>
              <td>10</td>
              <td style={{ textAlign: "center", verticalAlign: "center" }}>
                <StatusTag status={"Pass"} />
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
                    <Dropdown.Item
                      onClick={() => setModalDelete(true)}
                      style={{
                        borderBottom: "1px solid #D1D1D1",
                        color: "#148CF0",
                      }}
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
        title={"New Grade"}
        btnTitle={"Save"}
      />
      <NewSubject
        show={modalDelete}
        onHide={() => setModalDelete(false)}
        title={"Delete Grade"}
        isDelete={true}
        label={"delete the grade"}
        btnTitle={"Delete"}
      />
    </div>
  );
};
