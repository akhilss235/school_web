import React from 'react'
import Form from "react-bootstrap/Form";

function StudentLoginDetails() {
  return (
    <div>
          <div className="row">
              <div className="col-sm-6 mt-3">
                <Form.Label>
                  <b> Username</b>
                </Form.Label>
                <Form.Control type="text" placeholder={`Enter  Username`} />
              </div>

              <div className="col-sm-6 mt-3">
                <Form.Label>
                  <b>Password</b>
                </Form.Label>
                <Form.Control type="password" placeholder="Enter  Password" />
              </div>
            </div>

    </div>
  )
}

export default StudentLoginDetails