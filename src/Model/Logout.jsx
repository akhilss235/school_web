import React from "react";
import { Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const Logout = ({ show, handleClose, handleLogout }) => {
  return (
    <Modal show={show} centered onHide={handleClose}>
      <Modal.Body style={{ height: "180px" }}>
        <h6 style={{ textAlign: "center", marginTop: "30px" }}>
          Are you sure you want to logout?
        </h6>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "10px",
            marginTop: "50px",
          }}
        >
          <Button variant="success" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={handleLogout}>
            Logout
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
};


export default Logout