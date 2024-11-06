import React from 'react'
import Form from "react-bootstrap/Form";

function ParentLoginDetails() {
  return (
    <div>
          <div className="row p-2 mb-5" style={{backgroundColor:'#FFFFFF',borderBottomLeftRadius:'15px' ,borderBottomRightRadius:'15px'}}>
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

export default ParentLoginDetails