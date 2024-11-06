import React, { useState } from "react";
import Form from "react-bootstrap/Form";

const Payroll = () => {
  return (
    <>
        <div>
          <div className="section1 mb-5">
            <div className="row">
              <div className="col-sm-3 mt-3">
                <Form.Label>
                  <b> EPF No </b>
                </Form.Label>
                <Form.Control
                  type="number"
                  placeholder='Enter EPF No'
                />
              </div>
              <div className="col-sm-3 mt-3">
                <Form.Label>
                  <b> Basic Salary </b>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder='Enter Basic Salary'
                />
              </div>
              <div className="col-sm-3 mt-3">
                <Form.Label>
                  <b> Contract Type </b>
                </Form.Label>
                <Form.Select aria-label="Default select example">
      <option>select Contract Type </option>
      <option value="1">One</option>

    </Form.Select>
              </div>
              <div className="col-sm-3 mt-3">
                <Form.Label>
                  <b>Date of Leaving </b>
                </Form.Label>
                <Form.Control
                  type="date"
                />
              </div>
           
            </div>
          </div>
        </div>{" "}


    </>
  );
};


export default Payroll