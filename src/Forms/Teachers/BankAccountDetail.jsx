import React from 'react'
import Form from "react-bootstrap/Form";

function BankAccountDetail() {
  return (
    <>
          <div className="section1 mb-5 p-2 pb-5" style={{backgroundColor:'#FFFFFF',borderBottomLeftRadius:'15px' ,borderBottomRightRadius:'15px'}}>
            <div className="row">
              <div className="col-sm-3 mt-3">
                <Form.Label>
                  <b> Account Name</b>
                </Form.Label>
                <Form.Control
                  type="number"
                  placeholder='Enter Account Name'
                />
              </div>
              <div className="col-sm-3 mt-3">
                <Form.Label>
                  <b> Account Number </b>
                </Form.Label>
                <Form.Control
                  type="number"
                  placeholder='Enter Account Number'
                />
              </div>
              <div className="col-sm-3 mt-3">
                <Form.Label>
                  <b> Bank Name </b>
                </Form.Label>
                <Form.Control
                  type="number"
                  placeholder='Enter Bank Name'
                />
              </div>
              <div className="col-sm-3 mt-3">
                <Form.Label>
                  <b>IFSC Code </b>
                </Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter  IFSC Code"
                />
              </div>
           
            </div>


            <div className="row">
              <div className="col-sm-3 mt-3">
                <Form.Label>
                  <b>Branch Name</b>
                </Form.Label>
                <Form.Control
                  type="number"
                  placeholder='Enter Branch Name'
                />
              </div>
              <div className="col-sm-3 mt-3">
                <Form.Label>
                  <b> PAN Number </b>
                </Form.Label>
                <Form.Control
                  type="number"
                  placeholder='Enter PAN Number'
                />
              </div>
  
           
            </div>
        </div>{" "}


    </>
  )
}

export default BankAccountDetail