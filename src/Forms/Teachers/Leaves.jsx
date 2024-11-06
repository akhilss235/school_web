import React, { useState } from "react";
import Form from "react-bootstrap/Form";

const Leaves = () => {
  return (
    <>
        <div style={{backgroundColor:'#FFFFFF',borderBottomLeftRadius:'15px' ,borderBottomRightRadius:'15px'}} className="p-2 mb-5 pb-5">
            <div className="row">
              <div className="col-sm-3 mt-3">
                <Form.Label>
                  <b>Medical Leaves</b>
                </Form.Label>
                <Form.Control
                  type="number"
                  placeholder='Enter Medical Leaves'
                />
              </div>
              <div className="col-sm-3 mt-3">
                <Form.Label>
                  <b> Casual Leaves </b>
                </Form.Label>
                <Form.Control
                  type="number"
                  placeholder='Enter Casual Leaves'
                />
              </div>
              <div className="col-sm-3 mt-3">
                <Form.Label>
                  <b> Maternity Leaves </b>
                </Form.Label>
                <Form.Control
                  type="number"
                  placeholder='Enter Maternity Leaves'
                />
              </div>
              <div className="col-sm-3 mt-3">
                <Form.Label>
                  <b>Sick Leaves </b>
                </Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter Sick Leaves"
                />
              </div>
           
            </div>
        </div>{" "}


    </>
  );
};


export default Leaves