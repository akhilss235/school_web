import { useState, useRef, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Form, Row, Col, Button, Spinner } from "react-bootstrap";
import { IoIosCloseCircleOutline } from "react-icons/io";
import "./Fees.css";
import StudentImage from "../../../../img/studentimage.png";

function AddFeeModal({ open, onClose }) {
  const [formData, setFormData] = useState({
    feesType: "",
    collectionDate: "",
    paymentMode: "",
    amount: "",
    notes: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <Modal show={open} onHide={onClose} size="lg">
      <Modal.Body className="p-4">
        {/* <div className="container-fluid p-3" style={{height:'auto'}}> */}
        <Form
          className="roboto-font stylelabel styleinput"
          // onSubmit={handleSubmit}
        >
          <Row className="mb-3 justify-content-between">
            <Col xs={"auto"}>
              <h4>
                <b>Collect Fee</b>
              </h4>
            </Col>
            <Col xs={"auto"}>
              <IoIosCloseCircleOutline
                size={32}
                className="modalformclosebtn"
                onClick={onClose}
              />
            </Col>
          </Row>
          <Row className="mb-4 gy-3">
            <Col>
              <div
                className="d-flex align-items-center"
                style={{
                  backgroundColor: "#EBF5FD",
                  padding: "15px",
                  borderRadius: "10px",
                }}
              >
                <div style={{ width: "100px", height: "100px" }}>
                  <img
                    className="img-fluid"
                    src={StudentImage}
                    style={{ borderRadius: "10px" }}
                    alt=""
                  />
                </div>
                <div className="ms-3">
                  <span>
                    <h4 className="mb-0">
                      <b>Emma Thomas</b>
                    </h4>
                  </span>
                  <span style={{ color: "#148CF0", display: "block" }}>
                    20240015678
                  </span>
                  <span style={{ display: "block" }}>Class : I A</span>
                </div>
              </div>
            </Col>
          </Row>
          <Row className="mb-3 gy-3">
            <Col lg={6}>
              <Form.Group controlId="feesType">
                <Form.Label>Fees Type</Form.Label>
                <Form.Select
                  name="feesType"
                  value={formData.feesType}
                  onChange={handleInputChange}
                >
                  <option value="">Select Fees Type</option>
                  <option value="Monthly Fee">Monthly Fee</option>
                  <option value="Exam Fee">Exam Fee</option>
                  <option value="Admission Fee">Admission Fee</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col lg={6}>
              <Form.Group controlId="collectionDate">
                <Form.Label>Collection Date</Form.Label>
                <Form.Control
                  type="date"
                  name="collectionDate"
                  value={formData.collectionDate}
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className="mb-3 gy-3">
            <Col lg={6}>
              <Form.Group controlId="paymentMode">
                <Form.Label>Payment Mode</Form.Label>
                <Form.Select
                  name="paymentMode"
                  value={formData.paymentMode}
                  onChange={handleInputChange}
                >
                  <option value="">Select Payment Mode</option>
                  <option value="Cash">Cash</option>
                  <option value="Cheque">Cheque</option>
                  <option value="Online">Online</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col lg={6}>
              <Form.Group controlId="amount">
                <Form.Label>Amount</Form.Label>
                <Form.Control
                  type="text"
                  name="amount"
                  value={formData.amount}
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group controlId="notes">
                <Form.Label>Notes</Form.Label>
                <Form.Control
                  as="textarea"
                  name="notes"
                  value={formData.notes}
                  placeholder="Type Something....."
                  onChange={handleInputChange}
                  rows={3}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className="justify-content-end align-items-center my-4 gy-2">
            <Col xs={"auto"}>
              <Button className="modalformdiscardbtn" onClick={onClose}>
                Discard
              </Button>
            </Col>
            <Col xs={"auto"}>
              <Button className="modalformsavebtn" type="submit">
                Save & Print
              </Button>
            </Col>
          </Row>
        </Form>
        {/* </div> */}
      </Modal.Body>
    </Modal>
  );
}

export default AddFeeModal;
