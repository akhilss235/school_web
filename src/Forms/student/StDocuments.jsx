import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import InfoAccordion from "../../components/InfoAccordion";
import { Button } from "react-bootstrap";

const StDocuments = () => {
  return (
    <>
      <InfoAccordion title="Documents" iconName="Documents">
        <div >
          <div className="section1 mb-5 ">
          

            
            <div className="row">
              <div className="col-sm-6 mt-3">
                <Form.Label>
                  <b> Document Name</b>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder={`Enter  Document Name`}
                />
              </div>
              <div className="col-sm-6 mt-3">
              <div className="mx-3">
<p style={{fontSize:'13px',color:'#4FA9F3'}}>Upload image size of 4MB, Accepted Format PDF</p>
          <label htmlFor="files" className="custom-file">
            Upload
          </label>
          <input
            id="files"
            type="file"
            accept="image/*"          />
        </div> 


              </div>
            </div>
            <Button className="addnewbuttone mt-5">Add New</Button>{" "}
          </div>
        </div>{" "}
      </InfoAccordion>


    </>
  );
};

export default StDocuments;
