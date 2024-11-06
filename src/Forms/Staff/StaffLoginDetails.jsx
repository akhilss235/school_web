import React from 'react'
import Form from "react-bootstrap/Form";

function StaffLoginDetails() {
  return (
    <div> <div style={{backgroundColor:'#FFFFFF',borderBottomLeftRadius:'15px' ,borderBottomRightRadius:'15px'}}>
    <div className="row p-2 pb-5 mb-5" style={{backgroundColor:'#FFFFFF',borderBottomLeftRadius:'15px' ,borderBottomRightRadius:'15px'}}>
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

</div></div>
  )
}

export default StaffLoginDetails