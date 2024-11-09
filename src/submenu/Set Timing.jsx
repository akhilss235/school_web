import React, { useState } from "react";
import BasicBreadcrumbs from "../components/BasicBreadcrumbs";
import { Button, Table, Row, Col, Dropdown } from "react-bootstrap";
import Search from "../filter/Search";
import { FiPlus } from "react-icons/fi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDeleteOutline } from "react-icons/md";
import NewSubject from "../Model/NewSubject";

function SetTiming() {
  const [modalShow, setModalShow] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);


  const inputData = [
    {
      id: "1",
      name: "Period",
      type: "input",
    },
    [
      {
        id: "2",
        name: "From",
        type: "input",
      },
      ,
      {
        id: "3",
        name: "To",
        type: "input",
      },
    ],
  ];

  return (
    <div>
      <div className="text-start mb-3">
        <h4>
          <b>Set Timing</b>
        </h4>
        <BasicBreadcrumbs />
      </div>
      <Row className="justify-content-end mb-4 gy-3">
        <Col xs={"auto"}>
          <Search />
        </Col>
        <Col xs={"auto"}>
          <Button
            variant="#148CF0"
            style={{ backgroundColor: "#148CF0", color: "#FFFFFF" }}
            className="d-flex align-items-center gap-2"
            onClick={() => setModalShow(true)}
          >
            <FiPlus size={18} /> Add Timing
          </Button>
        </Col>
      </Row>

      <div className="table-responsive" style={{ backgroundColor: "#FFFFFF" }}>
        <Table responsive>
          <thead style={{ color: "#505050" }}>
            <tr>
              <th>Period</th>
              <th>From</th>
              <th>To</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>01</td>
              <td>09:00 AM</td>
              <td>09:45 AM</td>
              <td>
                <Dropdown>
                  <Dropdown.Toggle variant="link" bsPrefix="p-0">
                    {" "}
                    {/* Removes default button styling */}
                    <BsThreeDotsVertical />
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item
                      onClick={() => setModalShow(true)}
                      style={{ borderBottom: "1px solid #D1D1D1" }}
                    >
                      <FaRegEdit className="me-2" /> Edit
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={() => setModalDelete(true)}
                      style={{ color: "#ED1C00" }}
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
      {modalShow && (
        <NewSubject
          show={modalShow}
          onHide={() => setModalShow(false)}
          data={inputData}
          title={"Add Timing"}
          btnTitle={"Add Timing"}
        />
      )}
      {modalDelete && (
        <NewSubject
          show={modalDelete}
          onHide={() => setModalDelete(false)}
          title={"Delete Timing"}
          isDelete={true}
          label={"delete the Timing?"}
          btnTitle={"Delete"}
        />
      )}
    </div>
  );
}

export default SetTiming;
