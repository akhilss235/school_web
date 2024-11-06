import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import InfoAccordion from "../../components/InfoAccordion";
import { Button } from "react-bootstrap";
import { RiDeleteBin6Line } from "react-icons/ri";

const WorkExperience = () => {
  return (
    <>
      <InfoAccordion title="Work Experience" iconName="WorkExperience">
        <div  className=" mb-5">
            <div className="row">
              <div className="col-sm-3 mt-3">
                <Form.Label>
                  <b> Experience (in years) </b>
                </Form.Label>
                <Form.Control
                  type="number"
                  placeholder='Enter Experience (in years)'
                />
              </div>
              <div className="col-sm-3 mt-3">
                <Form.Label>
                  <b> Previous School Name </b>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder='Enter Previous School Name'
                />
              </div>
              <div className="col-sm-3 mt-3">
                <Form.Label>
                  <b> Previous School Address </b>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder='Enter Previous School Address'
                />
              </div>
              <div className="col-sm-2 mt-3">
                <Form.Label>
                  <b> Previous School Phone No </b>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder='Enter Previous School Phone No'
                />
              </div>
              <div className="col-sm-1 mt-5 ">
              <RiDeleteBin6Line style={{fontSize:'2rem',color:'red'}}/>
              </div>
            </div>
            <Button className="addnewbuttone mt-5">Add New</Button>{" "}
        </div>{" "}
      </InfoAccordion>


    </>
  );
};


export default WorkExperience