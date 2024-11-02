import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import InfoAccordion from "../../components/InfoAccordion";
import { Button } from "react-bootstrap";

const TransportInformation = () => {
  return (
    <>
      <InfoAccordion title="Transport Information" iconName="transport">
        <div>
          <div className="section1 mb-5">
            <div className="row">
              <div className="col-sm-4 mt-3">
                <Form.Label>
                  <b> Route</b>
                </Form.Label>
                <Form.Control type="text" placeholder={`Enter  Route`} />
              </div>
              <div className="col-sm-4 mt-3">
                <Form.Label>
                  <b>Vehicle Number</b>
                </Form.Label>
                <Form.Control type="text" placeholder="Enter Vehicle Number"/>
              </div>
              <div className="col-sm-4 mt-3">
                <Form.Label>
                  <b>Pickup Point</b>
                </Form.Label>
                <Form.Control type="tel" placeholder="Enter Pickup Point" />
              </div>
             
            </div>


{/* <Button className="addnewbuttone mt-5">Add New</Button>{' '} */}



          </div>
        </div>{" "}
      </InfoAccordion>

      {/* <InfoAccordion title="Sibling 2" iconName="Siblings">
        Content for Sibling 2
      </InfoAccordion> */}
    </>
  );
};



export default TransportInformation