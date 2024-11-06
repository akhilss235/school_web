import React, { useState } from "react";
import IMG from "../../img/Upload.png";
import { CiSquareAlert } from "react-icons/ci";
import Form from "react-bootstrap/Form";
import InfoHeader from "../../components/InfoHeader";

function PersonalInformation() {
    const [imagePreview, setImagePreview] = useState(null);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setImagePreview(URL.createObjectURL(file));
        };
  
    const handleRemoveImage = () => {
      setImagePreview(null);
    };
  
  return (
    <div>


{/* <div
        className="d-flex p-3"
        style={{
          backgroundColor: "#EBF5FD",
          borderBottom: "2px solid #2393F1",
        }}
      >
        <h4>
          <CiSquareAlert
            className="background me-3"
            style={{ color: "#148CF0" }}
          />
          <b>Personal Information</b>
        </h4>
      </div> */}
      <InfoHeader iconName="Student" title="Personal Information"/>
<div  style={{backgroundColor:'#FFFFFF',borderBottomLeftRadius:'15px' ,borderBottomRightRadius:'15px'}} className="p-2 pb-5">

      <div className="d-flex justify-content-start mt-5">
        {/* Image preview or placeholder */}
        <div>
          {imagePreview ? (
            <img
              src={imagePreview}
              alt="Preview"
              style={{ maxWidth: "100%", maxHeight: "150px" }}
            />
          ) : (
            <img
              src={IMG}
              alt="Placeholder"
              style={{ maxWidth: "100%", maxHeight: "150px" }}
            />
          )}
        </div>
        <div className="mx-3">
        
          <label htmlFor="file-upload" className="custom-file-upload mx-3 mb-2">
            Upload
          </label>
          <input
            id="file-upload"
            type="file"

            accept="image/*"
            onChange={handleFileChange}
          />

          <button
            type="button"
            className="btn btns mx-3"
            onClick={handleRemoveImage} 
            style={{ backgroundColor: "#148CF0", color: "#FFFFFF" }}
          >
            Remove
          </button>

          <div ><p className="Upload">Upload image size 4MB, Format JPG, PNG, SVG</p></div>
        </div> 
      </div>

      <div className="row">
        <div className="col-sm-3 mt-3">
          <Form.Label>
            <b>Student Id</b>
          </Form.Label>
          <Form.Control type="text" placeholder="Enter Student Id" />
        </div>

        <div className="col-sm-3 mt-3">
          <Form.Label>
            <b>Academic Year</b>
          </Form.Label>
          <Form.Select aria-label="Default select example">
            <option> select Academic Year</option>
            <option value="1">One</option>
          </Form.Select>{" "}
        </div>

        <div className="col-sm-3 mt-3">
          <Form.Label>
            <b>Admission Date</b>
          </Form.Label>
          <Form.Control type="date" />
        </div>
        <div className="col-sm-3 mt-3">
          <Form.Label>
            <b>Roll Number</b>
          </Form.Label>
          <Form.Control type="number" placeholder="Enter Roll Number" />
        </div>
      </div>

      <div className="row">
        <div className="col-sm-3 mt-3">
          <Form.Label>
            <b>First Name</b>
          </Form.Label>
          <Form.Control type="text" placeholder="Enter First Name" />
        </div>

        <div className="col-sm-3 mt-3">
          <Form.Label>
            <b>Last Name</b>
          </Form.Label>
          <Form.Control type="text" placeholder="Enter Last Name" />
        </div>

        <div className="col-sm-3 mt-3">
          <Form.Label>
            <b>Class</b>
          </Form.Label>
          <Form.Select>
            <option> select Class</option>
            <option value="1">One</option>
          </Form.Select>{" "}
        </div>
      </div>

      <div className="row">
        <div className="col-sm-3 mt-3">
          <Form.Label>
            <b>Gender</b>
          </Form.Label>
          <Form.Select>
            <option> select Gender</option>
            <option value="1">One</option>
          </Form.Select>{" "}
        </div>

        <div className="col-sm-3 mt-3">
          <Form.Label>
            <b>Date of Birth</b>
          </Form.Label>
          <Form.Control type="date" />
        </div>

        <div className="col-sm-3 mt-3">
          <Form.Label>
            <b>Blood Group</b>
          </Form.Label>
          <Form.Select>
            <option> select Blood Group</option>
            <option value="1">One</option>
          </Form.Select>{" "}
        </div>
        <div className="col-sm-3 mt-3">
          <Form.Label>
            <b>House</b>
          </Form.Label>
          <Form.Select>
            <option> select House</option>
            <option value="1">One</option>
          </Form.Select>{" "}
        </div>
      </div>

      <div className="row">
        <div className="col-sm-3 mt-3">
          <Form.Label>
            <b>Religion</b>
          </Form.Label>
          <Form.Select>
            <option> select Religion</option>
            <option value="1">One</option>
          </Form.Select>{" "}
        </div>

        <div className="col-sm-3 mt-3">
          <Form.Label>
            <b>Category</b>
          </Form.Label>
          <Form.Select>
            <option> select Category</option>
            <option value="1">One</option>
          </Form.Select>
        </div>

        <div className="col-sm-3 mt-3">
          <Form.Label>
            <b>Caste</b>
          </Form.Label>
          <Form.Control type="text" placeholder="Enter Caste" />
        </div>
        <div className="col-sm-3 mt-3">
          <Form.Label>
            <b>Mother Tongue</b>
          </Form.Label>
          <Form.Select>
            <option> select Mother Tongue</option>
            <option value="1">One</option>
          </Form.Select>{" "}
        </div>
      </div>

      <div className="row">
        <div className="col-sm-3 mt-3">
          <Form.Label>
            <b>Primary Contact Number</b>
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Primary Contact Number"
          />
        </div>

        <div className="col-sm-3 mt-3">
          <Form.Label>
            <b>Email Address</b>
          </Form.Label>
          <Form.Control type="text" placeholder="Enter Email Address" />
        </div>
      </div>
</div>

    </div>
  )
}

export default PersonalInformation